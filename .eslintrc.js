module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    `eslint:recommended`,
    `plugin:react/recommended`
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": `latest`,
    "sourceType": `module`
  },
  "plugins": [
    `react`
  ],
  "rules": {
    "array-bracket-spacing": [ 2, `always` ],
    "no-const-assign": 2,
    "no-var": `error`,
    "indent": [ 2, 2 ],
    "quotes": [ 2, `backtick` ],
    "eqeqeq": `error`
  }
}
