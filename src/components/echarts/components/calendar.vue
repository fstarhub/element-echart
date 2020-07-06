<template>
  <el-container>
    <el-main>
      <div class="calendatContainer">
        <div class="nowTime"></div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
      
  },
  methods: {
    getToday() {
      var today = new Date()
      
    }
  },
}
</script>

<style lang="less" scoped>
 .calendatContainer {
  width: 100%;
  height: 36px;
  background: red;
  .nowTime {
    height: 100%;
    width: 50%;
    background: blue;
  }
 }
</style>
