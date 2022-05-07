module.exports = {
  "env": {
      "node": true,
      "es2020": true,
      "jest": true
  },
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "rules": {
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error"
  }
}
