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

# output management（feature/output）
无需在index.html中手动引入所有资源;动态添加output的名称-----HtmlWebpackPlugin、、、
Webpack-manifest-plugin生成manifest.json,显示输出管理

# dev
开发环境追踪错误和警告，inline-source-map
选择自动编译工具webpack's Watch Mode(手动刷新浏览器)，webpack-dev-server(实时重新加载)，
webpack-dev-middleware(容器wrapper，把webpack处理后的文件传递给一个服务器server；配合express server;node server.js)
