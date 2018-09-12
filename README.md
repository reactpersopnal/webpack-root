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

# shimming(feature/shimming)
（1）去掉不合规矩的全局依赖；希望polyfill浏览器功能以支持更多的用户
（2）使用ProvidePlugin暴露某个模块中单个导出值,e.g去掉lodash中不需要调用的部分
（3）细粒度：this普遍指代window，this在CommonJS中指代module.exports
通过imports-loader等来选择
将全局变量作为一个普通的模块来导出
(4) polyfills:不放在主bundle里面
