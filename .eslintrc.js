module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ts'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.tsx', '.ts'],
  },
  rules: {
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'new-cap': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    quotes: 'off',
    'import/extensions': 'off',
    'one-var': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
  },
};
