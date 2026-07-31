module.exports = {
  '*.{js,vue,ts}': 'oxlint',
  '*.{css,scss,sass,html,vue}': 'stylelint',
  '*.**': 'prettier --check --ignore-unknown',
}
