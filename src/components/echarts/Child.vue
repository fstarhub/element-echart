<template>
  <div>
    <p>{{message}}</p><hr/>
    <h5 @click="toFather">{{doThing}}</h5>

  </div>
</template>

<script>
  export default {
    // 父子传值，标签传递，props接受（父向子）
    props:['message'],
    data() {
      return {
        doThing:'向父传值（自定义事件）'
      }
    },
    methods:{
      toFather () {
        this.$emit('toDo','子向父传值')// 自定义事件，子向父传值
      }
    }
  }
</script>

<style lang="less" scoped>

 
</style>
