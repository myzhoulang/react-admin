const {
  override,
  addLessLoader,
  fixBabelImports,
  addDecoratorsLegacy,
  addBundleVisualizer,
} = require('customize-cra')

module.exports = override(
  // 使用eslint 配置
  // useEslintRc("./.eslintrc.js"),

  // antd 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  // less 支持配置
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),

  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports
  // addWebpackAlias({
  //   ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
  // }),

  // adjust the underlying workbox
  // adjustWorkbox(wb =>
  //   Object.assign(wb, {
  //     skipWaiting: true,
  //     exclude: (wb.exclude || []).concat("index.html")
  //   })
  // )
)
