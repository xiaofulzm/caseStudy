### todolist(webpack配置流程)

------

1. ——    npm  init -y   

   **(初始化项目)**

2. ——    npm  install webpack  webpack-cli  —save-dev

   **(安装webpack 和  webpack-cli)**

3. —— npm install -D vue-loader vue-template-compiler

   **(vue项目手动配置   安装vue-loader)**

4. 创建项目文件

   ![](E:\git\caseStudy\Vdemo\vueTodolist-1115\todolistimg\src.png)

5. 创建webpack.config.js配置文件

   ![](E:\git\caseStudy\Vdemo\vueTodolist-1115\todolistimg\config.png)

   并安装相应的loader

   ![](E:\git\caseStudy\Vdemo\vueTodolist-1115\todolistimg\loader.png)

6. 配置postcss-loader文件 ( 加兼容性前缀)

   ![](E:\git\caseStudy\Vdemo\vueTodolist-1115\todolistimg\postcss.png)

7. webpack-config.js中配置各种loader

   ![](E:\git\caseStudy\Vdemo\vueTodolist-1115\todolistimg\imgloader.png)

8. 配置基本模板  ( npm install html-webpack-plugin --save-dev)

   ![](E:\git\caseStudy\Vdemo\vueTodolist-1115\todolistimg\template.png)

   

