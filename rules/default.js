module.exports = {
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': [
      'warning',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5'
      }
    ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "singleValue": false,
        "objectsInArrays": false,
        "arraysInArrays": false
      }
    ],
  }
};
