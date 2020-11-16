const path =  require("path");  // 引入node path模块 (文件路径)
const VueLoaderPlugin = require("vue-loader/lib/plugin");  // 一个vue插件  官方必须
const htmlWebpackPlugin = require("html-webpack-plugin"); //  html 模板

const webpack = require("webpack");  //热更新模块


module.exports={
    mode:"development",   //开发模式
    entry:path.resolve(__dirname,"./src/entry.js"),  // 入口文件
    output:{     
        path:path.resolve(__dirname,"bundle"),  //  出口文件
    },
    devServer:{
        contentBase:'./bundle',
        open:true,
        port:9527,
        hot:true,
        hotOnly:true
    },
    module:{   // 基本模组
        rules:[   //  根据不同的文件  定义相对应的规则
             {    //  配置 vue loader
                test: /\.vue$/,
                loader: 'vue-loader'
             },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                exclude:/node_modules/,  //排除不需要打包的文件
                use:{  // 配置相对应的babel-loader
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns:"usage"  // 编译用到es6的部分
                                }
                            ]
                        ]
                    }
                }

            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader' // 加兼容性前缀
                ]
            },
            // 其他文件  一些图片文件
            {
                test: /\.(jpg|png|gif|jpeg|webp)$/,
                use: [
                    {
                        loader:"file-loader",
                        options:{
                            esModule: false,
                            outputPath:"../images",  // 图片存储的地址
                            name:"[name].[ext]"  // 图片打包后的名称
                        }
                    }
                ]
            },

            // 字体文件 loader
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader:"file-loader",
                        options:{
                            outputPath:"../fonts",  // 字体存储的地址
                            name:"[name].[ext]"  // 图片打包后的名称
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new htmlWebpackPlugin({
            template:"./public/template.html"
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()  // 配置热更新

    ]
}