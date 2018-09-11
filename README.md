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

# asset management
管理图片、字体等文件，添加相应的loader(css-loader,file-loader,style-loader,xml-loader,csv-loader)
可以将资源与代码组合在一起，使资源紧密耦合
