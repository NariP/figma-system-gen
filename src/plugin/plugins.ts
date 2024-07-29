import { rgbToHex } from "./utils.ts";

figma.showUI(__html__);

// type ThemeType = "local-system" | "local-variables";

figma.ui.onmessage = (msg) => {
  if (msg.type === "import-local-variables") {
    (async () => {
      const localVars = await figma.variables.getLocalVariablesAsync();
      const result = localVars
        .filter((localVar) => localVar.resolvedType === "COLOR")
        .map((localVar) => {
          const rgbaObj = Object.values(localVar.valuesByMode)[0] as RGB | RGBA;
          console.log(localVar.codeSyntax);
          return {
            name: localVar.name,
            rgbaObj,
            hex: rgbToHex(rgbaObj),
            id: localVar.id,
          };
        });

      figma.ui.postMessage({ type: "local-variables-result", result });
    })();
  }

  if (msg.type === "create-rectangles") {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // figma.closePlugin();
};
