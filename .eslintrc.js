/* eslint-env node */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json", sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort", "import",],
  extends: ["plugin:prettier/recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier",],
  root: true,
  env: {
    node: true, jest: true,
  },
  rules: {
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/no-unused-vars": ["error", {
      argsIgnorePattern: "req|res|next"
    }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "simple-import-sort/imports": "error",
    "import/first": "error",
    "import/newline-after-import": ["error", {"count": 1}],
    "import/no-duplicates": "error",
    "no-console": "warn",
    "quotes": ["error", "double"],
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      "allowSeparatedGroups": false
    }],
    "indent": ["error", 2]
  },
  ignorePatterns: [".eslintrc.js"]
};