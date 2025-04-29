import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': [
        'warn',
        {
          semi: true,
          singleQuote: true,
          tapWidth: 2,
        },
      ],
    },
  }),
];

export default eslintConfig;
