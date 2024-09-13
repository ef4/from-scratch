const { babelCompatSupport } = require("@embroider/compat/babel");

module.exports = {
  plugins: [
    ['babel-plugin-ember-template-compilation'],
    ...babelCompatSupport()
  ],
  generatorOpts: {
    compact: false,
  },
}