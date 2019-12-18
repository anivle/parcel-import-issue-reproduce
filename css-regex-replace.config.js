function getThemePath() {
    const theme = process.env.npm_package_config_theme;
    const themeRelativePath = `/src/themes/${theme}/theme.css`;
    return `@import '${__dirname + themeRelativePath}';`
}
  
module.exports = {
    regexs: [
        {
            replace: /^@import 'theme_import_placeholder';$/m,
            with: getThemePath()
        }
    ]
};