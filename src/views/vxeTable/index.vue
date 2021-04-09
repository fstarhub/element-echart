/*
 * @Author: Jenny
 * @Date: 2020-06-04 16:49:14 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-04-09 15:04:57
 */
<!-- iview页 -->
<template>

  <div class="iveiwContainer">
    <p>vxeTable案例</p>
    <div class="left">123</div>
    　　<div class="right">
          <vxe-table
            border
            show-header-overflow
            show-overflow
            highlight-hover-row
            :align="allAlign"
            :data="tableData">
            <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
            <vxe-table-column field="name" title="Name"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
            <vxe-table-column field="address" title="Address"></vxe-table-column>
          </vxe-table>
        </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      allAlign: null,
        tableData: [
          { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
          { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
        ]
    }
  },
  //组件的方法集合
  methods: {},
  //监控data中的数据变化：一个数据影响多个数据
  watch: {},
  //监听属性：一个数据受多个数据影响
  computed: {},
  beforeCreate: function () {
    // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  },
  created: function () {
    // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，el 属性目前不可见。
  },
  beforeMount: function () {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  },
  mounted: function () {
    // 编译好的HTML挂载到页面完成后执行的事件钩子
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    // 此钩子函数中一般会做一些ajax请求获取数据进行数据初始化,可访问DOM元素
    console.log('Home done')
  },
  beforeUpdate: function () {
    // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  },
  updated: function () {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
    // 该钩子在服务器端渲染期间不被调用。
  },
  beforeDestroy: function () {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
  },
  destroyed: function () {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
  },
  activated() { } //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="less" scoped>
//@import url(); 引入公共css类
.iveiwContainer {
    margin-top: 10px;
}
.left {
    float: left;
    height: 500px;
    width: 300px;
    background: rgb(56, 163, 206);
}

.right {
    margin-left: 300px;
    height: 500px;
    background: rgb(41, 201, 139);
}
</style>
