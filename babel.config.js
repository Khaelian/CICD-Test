const babelConfig = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ],
  "plugins": [
    "transform-class-properties"
  ]
}

module.exports = babelConfig