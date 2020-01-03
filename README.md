# wangyi_demo

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

## vue 代码模版

(`)"Print to console": { "prefix": "vue", "body": [ "<!-- $1 -->", "<template>", "<div class='demo'>$5</div>", "</template>", "", "<script>", "//这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）", "//例如：import 《组件名称》 from '《组件路径》';", "export default {", "//import 引入的组件需要注入到对象中才能使用", "components: {},", "data() {", "//这里存放数据", "return {", "", "};", "},", "//组件的方法集合", "methods: {", "", "},", "//监控 data 中的数据变化：一个数据影响多个数据", "watch: {},", "//监听属性：一个数据受多个数据影响", "computed: {},", "beforeCreate: function() {", "// 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。", "},", "created: function() {", "// 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。", "},", "beforeMount: function() {", "// 在挂载开始之前被调用：相关的 render 函数首次被调用。", "},", "mounted: function() {", "// 编译好的 HTML 挂载到页面完成后执行的事件钩子", "// el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。", "// 此钩子函数中一般会做一些 ajax 请求获取数据进行数据初始化,可访问 DOM 元素", "console.log('Home done');", "},", "beforeUpdate: function() {", "// 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。", "},", "updated: function() {", "// 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。", "// 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。", "// 该钩子在服务器端渲染期间不被调用。", "},", "beforeDestroy: function() {", "// 实例销毁之前调用。在这一步，实例仍然完全可用。", "},", "destroyed: function() {", "// Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。", "},", "activated() {}, //如果页面有 keep-alive 缓存功能，这个函数会触发", "}", "</script>", "", "<style lang='less' scoped>", "//@import url($3); 引入公共 css 类", "$4", "</style>" ], "description": "vue 的代码片段" } (`)
