<!-- 测试 -->
<template>
  <div class="demo">
    <p>title</p>
    <p><el-input v-model="name"></el-input><el-input v-model="age"></el-input></p>
    <!-- <p>计算属性{{people}}</p> -->
    <img :src="vcUrl">
    <!-- <img src="https://img1.baidu.com/it/u=1642572855,2753515187&fm=26&fmt=auto&gp=0.jpg"> -->
    <!-- <el-image style="width: 100px; height: 100px" src="https://api.wuzhen.my5v.com/regist/getVerifyCode?t=1619758809000"></el-image> -->
    <p>{{a | upper}}</p>
    <div id="mount-point"></div>
  </div>
</template>

<script>

import Vue from 'vue'
// import {extendTest} from './extendsTest'
export default {
  // extends: extendTest,
  components: {},
  data() {
    return {
      vcUrl: 'https://api.wuzhen.my5v.com/regist/getVerifyCode?t=1619758809000',
      todos: [
        { name: 'zhangsan', text: 'wide' },
        { name: 'lishi', text: 'yin' },
        { name: 'wanwu', text: 'xue' }
      ],
      name: 'zhangsan',
      age: 14,
      a: 'hello'
    }
  },
  filters: {
    upper: function(value) {
      console.log(value)
      return value.toUpperCase()
    }
  },
  //组件的方法集合
  methods: {},
  watch: {
    // name: function() {
    //   console.log('haha')
    // }
  },
  computed: {
    // 方法1
    // people: function() {
    //   return this.name + this.age
    // }
    // 方法2
    people: {
      // getter
      get: function() {
        return this.name + this.age
      },
      // setter
      // set: function(val) {
      // }
    }
  },
  mounted() {
    // let getDom = document.getElementById('mount-point')
    // getDom.appendChild(proFile.$el)
    // let getDom = document.getElementById('mount-point')
    // getDom.appendChild(extendTest.$el)
  }
}
// var Profile = Vue.extend({
//     template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
//     data: function () {
//       return {
//         firstName: 'Walter',
//         lastName: 'White',
//         alias: 'Heisenberg'
//       }
//     }
//   })
//   let proFile = new Profile().$mount('#mount-point')

//   const comp={//声明一个对象comp
//   props:{
//     active:Boolean,
//     propOne:String
//   },
//   template:`<div>
//     <input type='text' v-model="a">
//     <span @click="handl">{{propOne}}</span>
//     <span v-if="active">134</span>
//   </div>`,
//   data(){
//     return {
//       a:0
//     }
//   },
//   methods:{
//     handl(){
//       // this.onChange()
//       this.$emit('changea')
//     }
//   }
// }
// const CompVue=Vue.extend(comp)//compVue 继承comp组件
// new CompVue({//实例化组件
//   el:'#mount-point',
//   data(){
//     return{
//         a:30
//     }
//   }
// })
</script>

<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
