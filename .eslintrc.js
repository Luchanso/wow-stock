module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "strict": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/anchor-is-valid": [1, { "aspects": ["invalidHref"] }],
    "no-use-before-define": 0,
    "react/prefer-stateless-function": [2, { "ignorePureComponents": true }]
  }
};
