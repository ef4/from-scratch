const { babelCompatSupport } = require("@embroider/compat/babel");

module.exports = {
  plugins: [
    ...babelCompatSupport()
  ],
  generatorOpts: {
    compact: false,
  },
}