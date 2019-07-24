module.exports = {
  rules: {
    semi: [2, 'never'],
    'no-console': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': [
      1,
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'array-bracket-spacing': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-inferrable-types': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    camelcase: 0,
    '@typescript-eslint/camelcase': 0,
    'vue/html-self-closing': 0,
    curly: 0,
  },
}
