module.exports = {
  // parser: 'babel-eslint',
  parser: '@babel/eslint-parser',
  env: {
    jest: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  rules: {
    'comma-dangle': [
      2,
      'always-multiline',
    ],
  },
}
