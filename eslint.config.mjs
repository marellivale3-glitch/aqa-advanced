import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['**/node_modules/**', '**/coverage/**', '**/dist/**'],
  },
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.mocha,
        ...globals.jest,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-debugger': 'error',
    },
  },
];