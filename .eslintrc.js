module.exports = {
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: [
    '@emotion',
    'prettier'
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    "prettier/prettier": 2,
    "class-methods-use-this": 0,
    "@emotion/import-from-emotion": "error",
    "@emotion/jsx-import": "error",
    "@emotion/no-vanilla": "error",
    "@emotion/styled-import": "error",
    "@emotion/syntax-preference": [2, "string"],
    "func-names": 0,
    "import/prefer-default-export": 0,
    "import/no-default-export": 2,
    "jsx-a11y/anchor-is-valid": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
    }],
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "React.FC": { "message": "Please don\'t use React.FC." },
        }
      }
    ]
  },
  overrides: [
    {
      "files": ["pages/**/*.tsx"],
      "rules": {
        "import/prefer-default-export": 2,
        "import/no-default-export": 0,
      }
    }
  ]
};
