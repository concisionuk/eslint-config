module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['vue'],
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@vue/standard',
    './rules/default.js'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
};
