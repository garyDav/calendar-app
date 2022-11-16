module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['never'],
  },
}
