# 1、入口出口文件

######      a、一对一

entry:'入口文件',

output:出口文件''

###### b、多对一

entry:['入口文件 1','入口文件 2'],

output:'出口文件'

###### c、多对多

使用npm中的glob来匹配js文件

entry:{

要起的名字:"路径",

要起的名字:"路径",

},

指定webpack应该使用哪个模块，来构建内部

output:{

 path: out_path,

   filename: "[name].js"

}

# 2、devServer

配置启动端口使用  需要引入npm包html-webpack-plugin ，高级的webpack-cli(4.0+)可以会导致.bin文件缺少东西，需要另外研究

# 3、module

配置loader等模块解析

# 4、plugins

插件

# 5、package

test：打包为测试环境包命令

build：打包为部署环境包命令

dev：开发启动服务命令