<template>
  <div>
    <h5 @click="eventClick">事件总线--{{eventMsg}}</h5>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        eventMsg:'事件总线数据'
      }
    },
    
    methods:{
      eventClick (){
        console.log('shijianzongxian')
        this.$EventBus.$emit('child-data',this.eventMsg)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

 
</style>
