# 1、入口出口文件

###### a、一对一

entry:'入口文件',

output:出口文件''

###### b、多对一

entry:['入口文件 1','入口文件 2'],

output:'出口文件'

###### c、多对多

使用 npm 中的 glob 来匹配 js 文件

entry:{

要起的名字:"路径",

要起的名字:"路径",

},

指定 webpack 应该使用哪个模块，来构建内部

output:{

path: out_path,

filename: "[name].js"

}

# 2、devServer

配置启动端口使用 需要引入 npm 包 html-webpack-plugin ，高级的 webpack-cli(4.0+)可以会导致.bin 文件缺少东西，需要另外研究

# 3、module

配置 loader 等模块解析

# 4、plugins

插件

# 5、package

build：打包为部署环境包命令

dev：开发启动服务命令
