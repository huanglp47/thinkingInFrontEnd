### A Vue.js project

### 技术链：
#### 1.vue2.0+, vuex, vue-router, axioss, ass。按照UI要求，界面使用element-ui UI框架
链接： http://element-cn.eleme.io/#/zh-CN/component/installation

#### 2.Vuex

<font color='red'>超过三层组件嵌套关系时使用vuex,不使用事件订阅或eventBus!持久化缓存使用localStorage</font>

>2.1.dispatch action中定义的方法（view层触发,还可以用mapActions映射，原理一致），再commit（action）到mutation层修改state，再双向绑定同步view层做出回应
state

state区分全局和模块state（局部）

使用： this.$store.state.userName

使用了module则需要添加作用域。this.$store.state.login.userName

action和mutation，getter都是全局的，但是参数state默认是module内的局部state，访问全局state需要参数rootState
直接访问
this.$store.state.login.userName

this.$store.dispatch("getLogin", "token11234566")

>2.2mapActions, mapState,mapGetters

mapState: 直接使用this.$store.state.userName 太麻烦，可以直接mapState导出
```js
 ...mapState({
    userName: state=>state.login.userName,
    job:state=>state.global_job,
    token: state=>state.login.token
  })
```
mapActions
同理，直接this.$store.dispatch("getLogin", "token11234566")也麻烦，使用mapActions导出
```js
...mapActions([
    'getLogin'
  ])
```

#### 3.vue-router
$route.params

$route.query

this.$router:router 实例。

this.$route:当前激活的路由信息对象。这个属性是只读的，里面的属性是 immutable (不可变) 的，
不过可以用 watch (监测变化) 它。

beforeEach:全局路由守卫（路由实例上）

beforeEnter： 路由配置里调用（路由属性上）

beforeRouteEnter： 被激活的组件里调用（组件内）

scrollBehavior ：滚动行为（路由属性上）只在支持 history.pushState 的浏览器中可用

#### 路由懒加载(vue项目实现按需加载的3种方式)
>webpack :使用 require.ensure() 来拆分代码

1.require.ensure() 是一种使用 CommonJS 的形式来异步加载模块的策略
```
require.ensure(dependencies: String[], callback: function(require), chunkName: String)
```
第一个参数指定依赖的模块，
第二个参数是一个函数

2.vue路由懒加载:
AMD异步加载
```
const tvProgram = resolve => require(['@/page/tvProgram'], resolve);
```

3.ES6 import(结合webpack+vue)
```
 const HelloWorld = () => import('../view/home/HelloWorld.vue')
```
#### 4.axios

#### 5.webpack
webpack——devtool里的7种SourceMap模式
```
eval	每个module会封装到 eval 里包裹起来执行，并且会在末尾追加注释 //@ sourceURL.
source-map	生成一个SourceMap文件.
hidden-source-map	和 source-map 一样，但不会在 bundle 末尾追加注释.
inline-source-map	生成一个 DataUrl 形式的 SourceMap 文件.
eval-source-map	每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap.
cheap-source-map	生成一个没有列信息（column-mappings）的SourceMaps文件，不包含loader的 sourcemap（譬如 babel 的 sourcemap）
cheap-module-source-map	生成一个没有列信息（column-mappings）的SourceMaps文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。
```

参考： https://www.cnblogs.com/wangyingblog/p/7027540.html

#### 6.sass:
```
npm install node-sass --save-dev
npm install sass-loader --save-dev
<style lang="scss" type="text/css">
```



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


