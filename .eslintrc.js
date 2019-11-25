module.exports = {
  "extends": [
    "react-app", // for editor
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  // "plugins": ["babel"],
  "rules": {
    "no-debugger": process.env.NODE_ENV !== "production" ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false,
        "trailingComma": "all",
        "bracketSpacing": true,
        "printWidth": 80,
        "jsxBracketSameLine": true
      }
    ]
  }
}
