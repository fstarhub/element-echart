<template>
  <el-container class="container">
    <el-main>
      <el-row :gutter="10" class="elRowTop">
        <el-col :span="8"><div class="itemContainer"><Calendar /></div></el-col>
        <el-col :span="8"><div class="itemContainer"><EchartsPie /></div></el-col>
        <el-col :span="8"><div class="itemContainer">3</div></el-col>
      </el-row>
      <el-row :gutter="10" class="elRowBottom">
        <el-col :span="12"><div class="itemContainer">4</div></el-col>
        <el-col :span="12"><div class="itemContainer">5</div></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
import Calendar from './components/calendar'
import EchartsPie from './components/pieData'
export default {
  components: {
    Calendar,
    EchartsPie
  },
  data() {
    return {}
  },
  methods: {
  },
  mounted:function() {
  }
}
</script>

<style lang="less" scoped>
.container {
  background: #EFEFEF;
  .elRowTop {
    .itemContainer {
      background: white;
      height: 300px;
    }
  }
  .elRowBottom {
    margin-top: 10px;
    .itemContainer {
      background: white;
      height: 300px;
    }
  }
}
 
</style>
