module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["prettier"],
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
};
