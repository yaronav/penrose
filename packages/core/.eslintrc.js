/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "eslint-comments",
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-react",
    "eslint-plugin-import",
  ],
  rules: {
    "@typescript-eslint/consistent-type-assertions": [
      1,
      { assertionStyle: "never" },
    ],
    "@typescript-eslint/no-base-to-string": 1,
    "@typescript-eslint/no-confusing-void-expression": 2,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": 2,
    "@typescript-eslint/no-unnecessary-condition": 1,
    "@typescript-eslint/non-nullable-type-assertion-style": 2,
    "@typescript-eslint/prefer-ts-expect-error": 2,
    eqeqeq: 2,
    "eslint-comments/no-use": 2,
    "import/no-cycle": 2,
    "no-fallthrough": 2,
    "no-template-curly-in-string": 2,
  },
  ignorePatterns: [
    "**/*.test.ts",
    "**/*.test.tsx",
    "src/__testfixtures__/transformtest.input.ts",
    "src/__testfixtures__/transformtest.output.ts",
    "src/parser/DomainParser.ts",
    "src/parser/StyleParser.ts",
    "src/parser/SubstanceParser.ts",
  ],
};
