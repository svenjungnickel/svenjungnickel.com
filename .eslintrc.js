module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
    },
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['prettier'],
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
