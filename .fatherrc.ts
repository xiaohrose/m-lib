import { defineConfig } from 'father';

export default defineConfig({
  // 基础配置
  // platform: 'browser', // 'browser' | 'node'，默认为 browser
  // targets: 'esnext',    // 编译目标，可选 'es5' | 'es6' | 'esnext' 等

  // ES Module 输出配置
  esm: {
    input: 'src',
    output: 'dist/es',      // 输出目录
    // transformer: 'babel', // 'babel' | 'esbuild'，默认为 babel
    // 忽略某些依赖的打包
    // ignores: [
    //   'some-unwanted-package'
    // ]
  },

  // CommonJS 输出配置
  cjs: {
    input: 'src',
    output: 'dist/lib',     // 输出目录
    // transformer: 'babel', // 'babel' | 'esbuild'
    // 平台特定配置
    // platform: 'node',  // 可以覆盖全局 platform 配置
    // 指定需要额外编译的依赖
    // extraModules: ['some-esm-only-package']
  },

  // UMD 输出配置 (可选)
  // umd: {
  //   name: 'MyLibrary', // 全局变量名
  //   output: 'dist',    // 输出目录
  //   sourcemap: true,   // 生成 sourcemap
  //   // 外部依赖，不打包进 UMD
  //   externals: {
  //     'react': 'React',
  //     'react-dom': 'ReactDOM'
  //   },
  // 需要额外注入的全局变量
  // globals: {
  //   'antd': 'antd',
  //   'lodash': '_'
  // },
  // 压缩配置
  // minify: {
  //   compress: {
  //     drop_console: true
  //   }
  // }
  // },

  // // 类型声明文件生成配置
  // extraBabelPlugins: [
  //   // 可以添加额外的 Babel 插件
  //   ['babel-plugin-import', {
  //     libraryName: 'antd',
  //     libraryDirectory: 'es',
  //     style: true
  //   }]
  // ],

  // 自定义 Babel 配置
  // babel: {
  //   presets: [
  //     '@babel/preset-env',
  //     '@babel/preset-typescript',
  //     '@babel/preset-react'
  //   ],
  //   plugins: [
  //     '@babel/plugin-transform-runtime',
  //     '@babel/plugin-proposal-class-properties'
  //   ]
  // },

  // 自定义 PostCSS 配置
  // postcss: {
  //   plugins: [
  //     require('autoprefixer')({
  //       overrideBrowserslist: ['last 2 versions', '>1%']
  //     })
  //   ]
  // },

  // 排除某些文件或目录
  // exclude: [
  //   '**/demo/**',
  //   '**/test/**',
  //   '**/__tests__/**'
  // ],

  // 别名配置
  alias: {
    '@': './src',
    'components': './src/components'
  },

  // 自定义 loader
  // chainWebpack(memo) {
  //   // 可以在这里修改 webpack 配置
  //   return memo;
  // },

  // 自定义 esbuild 配置
  // esbuild: {
  //   target: 'es2015',
  //   minify: true
  // },

  // 插件配置
  // plugins: [
  //   // 可以添加 father 插件
  // ],

  // 其他高级配置
  // define: {
  //   'process.env.NODE_ENV': process.env.NODE_ENV || 'production'
  // }
});