module.exports = {
  'env': {
    'node': true,
    'mocha': true,
  },
  'plugins': [
    'flowtype',
    'flowtype-errors',
    'prettier',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    "flowtype-errors/show-errors": 2,
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
