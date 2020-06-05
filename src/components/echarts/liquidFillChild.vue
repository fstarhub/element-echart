<template>
  <div>
    <slot name="top"></slot>
    <!-- <h6>liquidfillchild----title</h6> -->
    <!-- <slot></slot> -->
    <ul>
      <li v-for="item in nameList" :key="item.id">
        <slot :nameList=item></slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['nameList']
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

 
</style>
