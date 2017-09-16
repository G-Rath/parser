module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/test/init.js",
  coverageReporters: ["json"],
  transform: {
    "^.+\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testRegex: "\\.test\\.ts$",
  moduleFileExtensions: ["js", "ts"]
}
