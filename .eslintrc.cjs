module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: '@rocketseat/eslint-config/react',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
}
