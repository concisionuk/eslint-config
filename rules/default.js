export default {
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5'
      }
    ]
  }
};
