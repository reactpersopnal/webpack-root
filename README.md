# webpack
尝试webpack官网上的全部内容，结合相应项目中的内容进行分析学习
# 当前项目的版本
webpack 4.18.0
添加的版本为webpack 4+ ，还需安装webpack-cli

# initial the project
npm init -y
generate 'package.json'

#master
初始化项目，webpack构建依赖图，bundle解决调用板块之间的依赖关系,在dist文件夹下编译出main.js
配置webpack的配置文件：webpack.config.js

# tree shaking (feature/tree)
移除未引用代码-----优化输出，减少bundle.js的大小
(1)使用ES2015的import和export
(2)package.json添加sideEffects
(3)引用一个删除为引用代码的压缩工具manifier（e.g UglifyJSPlugin）
