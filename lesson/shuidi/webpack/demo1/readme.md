-  es6 node babel loader
- 前端生产工艺 CI CD
- src 开发目录
  入口文件  main.js
  煮火锅，挺香的
  webpack bundle 

- js 与其他类型的文件并不是水火不相容的

    1. css -> 文本
    2. json Object {}

- webpack 如何让js文件理解css

开发的时候入口src/main.js  css  css-loader 

- webpack 4 devDependencies
- webpack 用到那些依赖呢？
- webpack 登场 bundler
  静态资源 css  js styl png gif webpack
  1. cross-env  NODE_ENV = development
  可以屏蔽windows linux mac的环境变量设置差异

  2. 最小执行单元
    entry output mode
    webpack webpack.config.js 配置

  3. rimraf 删除目录

  4. loader 
     webpack 工厂流水线
     工人，不能理解的文件css .style .vue 
     loader 能理解的地方去处理一下 
     .vue  js  component

     - loader 概念通过 css-loader
