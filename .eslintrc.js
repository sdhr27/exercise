module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'new-cap': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
  },
};
