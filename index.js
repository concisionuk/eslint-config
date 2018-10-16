export default {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['vue'],
  extends: [
    './rules/default.js',
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
};
