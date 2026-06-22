// Minimal flat config. The point here is `no-undef`: after splitting the app
// into ES modules, any identifier a module forgot to import or declare shows up
// as an undefined reference — our safety net for the split.
export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly', document: 'readonly', navigator: 'readonly',
        localStorage: 'readonly', devicePixelRatio: 'readonly',
        requestAnimationFrame: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly',
        prompt: 'readonly', innerWidth: 'readonly', innerHeight: 'readonly', console: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
    },
  },
];
