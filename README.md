# 1、入口出口文件

######      a、一对一

entry:'入口文件',

output:出口文件''

![image-20201210190823768](/home/hjs/.config/Typora/typora-user-images/image-20201210190823768.png)

###### b、多对一

![image-20201210192142203](/home/hjs/.config/Typora/typora-user-images/image-20201210192142203.png)

entry:['入口文件 1','入口文件 2'],

output:'出口文件'

###### c、多对多

使用npm中的glob来匹配js文件

entry:{

要起的名字:"路径",

要起的名字:"路径",

},

output:{

 path: out_path,

   filename: "[name].js"

}

![image-20201210195311308](/home/hjs/.config/Typora/typora-user-images/image-20201210195311308.png)

# 2、devServer

配置启动端口使用  需要引入npm包html-webpack-plugin ，高级的webpack-cli(4.0+)可以会导致.bin文件缺少东西，需要另外研究

# 3、module

配置loader