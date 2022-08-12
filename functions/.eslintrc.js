module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "indent": "off",
    "quotes": ["error", "double"],
    "ignoreComments": 0,
    "skipBlankLines": 0,
    "no-trailing-spaces": ["error", {"skipBlankLines": true}],
  },
  // parserOptions: {
  //   "ecmaVersion": 2017,
  // }
};
