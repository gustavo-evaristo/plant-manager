module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    jsx: true,
  },

  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers', 'import', 'react'],

  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
    react: {
      version: 'detect',
    },
  },

  rules: {
    'prettier/prettier': ['error'],
    camelcase: 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    '@typescript-eslint/no-explicit-any': 0,
    'react-hooks/exhaustive-deps': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/default': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '*/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@*/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
  },
};
