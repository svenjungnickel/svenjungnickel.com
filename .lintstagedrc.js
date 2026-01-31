module.exports = {
  '*.{js,vue,ts}': (filenames) => {
    return `sh -c 'ESLINT_USE_FLAT_CONFIG=false eslint ${filenames.join(' ')}'`
  },
  '*.{css,scss,sass,html,vue}': 'stylelint',
  '*.**': 'prettier --check --ignore-unknown',
}
