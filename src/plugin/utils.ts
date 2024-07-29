export const rgbToHex = ({
  r,
  g,
  b,
  a,
}: {
  r: number;
  g: number;
  b: number;
  a?: number;
}) => {
  const toHex = (value: number) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  // 알파 값 16진수로 변환 (0-255 범위로 변환 후 16진수로 표현)
  const toHexA = (value: number | undefined) => {
    if (value === 1 || value === undefined) {
      return "";
    }

    return Math.round(value * 255)
      .toString(16)
      .padStart(2, "0");
  };

  const hex = [toHex(r), toHex(g), toHex(b), toHexA(a)].join("");
  return `#${hex}`;
};
