module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
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
  plugins: ['react', '@typescript-eslint', 'jest', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ts'],
      },
    },
    // 'import/extensions': ['.js', '.jsx', '.tsx', '.ts'],
  },
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'no-constant-condition': 'off',
    '@typescript-eslint/no-this-alias': 0,
    'no-prototype-builtins': 0,
  },
};
