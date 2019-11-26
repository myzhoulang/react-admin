const {
  override,
  addLessLoader,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
  addBundleVisualizer,
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // antd 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  addBundleVisualizer({}),

  // less 支持配置
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),

  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  // 添加 webpack 别名，这里用于解决 icon 文件太大的问题
  addWebpackAlias({
    '@ant-design/icons/lib/dist$': path.resolve(
      __dirname,
      './src/config/icons.js',
    ),
  }),

  // adjust the underlying workbox
  // adjustWorkbox(wb =>
  //   Object.assign(wb, {
  //     skipWaiting: true,
  //     exclude: (wb.exclude || []).concat("index.html")
  //   })
  // )
)
