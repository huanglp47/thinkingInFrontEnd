### webpack
```
有哪些优化？
1.分离CSS
npm install extract-text-webpack-plugin --save

2.使用webpack.optimize.UglifyJsPlugin插件压缩混淆JS代码

3.分离第三方库
new webpack.optimize.CommonsChunkPlugin({
    filename:"common.js",
    name:"commons"
});

4.按需打包


5.异步加载模块
require.ensure([], function(require){
    var list = require('./list');
    list.show();
}, 'list');



```
