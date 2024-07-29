module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@figma/figma-plugins/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.app.json',
    },
    plugins: ['react-refresh'],
    rules: {
        /** prettier 에러 */
        "prettier/prettier": "error",
        "react-refresh/only-export-components": [
            'warn',
            {allowConstantExport: true},
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_"
            }
        ]
    },
}
