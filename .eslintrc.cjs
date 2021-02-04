module.exports = {
  parser: 'babel-eslint',
  env: {
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
