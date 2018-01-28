module.exports = {
  'env': {
    'node': true,
    'mocha': true,
  },
  'plugins': [
    'flowtype',
    'prettier',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'es5',
      'semi': false,
      'arrowParens': 'always',
    }],
  },
  globals: {
    'sandbox': true,
    'expect': true
  }
}
