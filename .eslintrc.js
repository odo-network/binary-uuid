module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
    'arrow-parens': ['off'],
    'import/prefer-default-export': 'off',
    'no-multi-assign': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'import/no-cycle': 'off',
    quotes: ['error', 'single'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  plugins: ['import', 'promise', 'prettier', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        directory: 'tsconfig.json',
      },
    },
  },
};
