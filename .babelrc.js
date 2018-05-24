module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "Android >= 4",
            "iOS >= 10",
            "ChromeAndroid >= 39",
            "last 2 Chrome versions",
            "last 1 Edge versions",
            "last 1 Firefox versions",
            "last 1 Safari versions"
          ]
        },
        "useBuiltIns": "usage",
        // polyfillのログなどを確認したいとき
        // "debug": true,
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-syntax-dynamic-import"
  ]
}
