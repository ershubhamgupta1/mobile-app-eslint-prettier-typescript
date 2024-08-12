module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    // Basic ESLint rules
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': 'off', // TypeScript handles this
    '@typescript-eslint/no-unused-vars': ['error'],

    // React rules
    'react/prop-types': 'off', // TypeScript handles types
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',

    // React Native rules
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',

    // TypeScript rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'react-native/no-color-literals': 'off', // Disable the rule

    // Prettier rules
    // 'prettier/prettier': ['error', {
    //   singleQuote: true,
    //   trailingComma: 'es5',
    //   semi: true,
    //   tabWidth: 2,
    //   printWidth: 80,
    // }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
};
