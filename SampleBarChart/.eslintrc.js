module.exports = {
  parser: "babel-eslint",
  plugins: ["prettier"],
  extends: ["@mstr/eslint-config-mstr", "prettier"],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    mstrmojo: true,
    mstrApp: true,
  },
  rules: {
    "max-len": [
      "error",
      { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true },
    ],
    "import/no-default-export": "off",
    "no-underscore-dangle": ["error", { allowAfterThis: true }],
    "no-restricted-globals": 0,
    radix: ["error", "as-needed"],
  },
};
