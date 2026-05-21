import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly",
      },
    },
    rules: {
      "no-var": "error",
      "no-unused-vars": "error",
      eqeqeq: "error",
      "prefer-const": "error",
    },
  },
];
