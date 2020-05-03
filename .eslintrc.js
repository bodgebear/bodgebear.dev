module.exports = {
  parserOptions: {
    project: "./tsconfig.json"
  },
  "plugins": [
    'emotion'
  ],
  extends: ['airbnb-typescript'],
  rules: {
    "class-methods-use-this": 0,
    "emotion/import-from-emotion": "error",
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/styled-import": "error",
    "emotion/syntax-preference": [2, "string"],
    "func-names": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
  }
};
