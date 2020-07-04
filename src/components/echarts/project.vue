<template>
  <el-container class="container">
    <el-main>
      <el-row :gutter="10">
        <el-col :span="8"><div class="bg-purple">1</div></el-col>
        <!-- <el-col :span="8"><div id="situationOverviewDom" class="bg-purple">2</div></el-col> -->
        <el-col :span="8"><div class="bg-purple"><EchartsPie /></div></el-col>
        <el-col :span="8"><div class="bg-purple">3</div></el-col>
      </el-row>
      <el-row :gutter="10" class="elRowBottom">
        <el-col :span="12"><div class="bg-purple">4</div></el-col>
        <el-col :span="12"><div class="bg-purple">5</div></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
import EchartsPie from './components/pieData'
export default {
  components: {
    EchartsPie
  },
  data() {
    return {}
  },
  methods: {
    // situationOverview() {
    //   let myChart = this.$echarts.init(document.getElementById('situationOverviewDom'))
    //   let option = {
    //       tooltip: {
    //           trigger: 'item',
    //           formatter: '{a} <br/>{b}: {c} ({d}%)'
    //       },
    //       legend: {
    //           orient: 'vertical',
    //           left: 10,
    //           data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    //       },
    //       series: [
    //         {
    //             name: '访问来源',
    //             type: 'pie',
    //             radius: ['50%', '70%'],
    //             avoidLabelOverlap: false,
    //             label: {
    //                 show: false,
    //                 position: 'center'
    //             },
    //             emphasis: {
    //                 label: {
    //                     show: true,
    //                     fontSize: '14',
    //                     fontWeight: 'bold'
    //                 }
    //             },
    //             labelLine: {
    //                 show: false
    //             },
    //             data: [
    //                 {value: 335, name: '直接访问'},
    //                 {value: 310, name: '邮件营销'},
    //                 {value: 234, name: '联盟广告'},
    //                 {value: 135, name: '视频广告'},
    //                 {value: 1548, name: '搜索引擎'}
    //             ]
    //         }
    //       ]
    //   };
    //   myChart.setOption(option)
    // }
  },
  mounted:function() {
    // this.situationOverview()
  }
}
</script>

<style lang="less" scoped>
.container {
  // background: blue;
}
.elRowBottom {
  margin-top: 10px;
}
.bg-purple-light {
  background: white;
  height: 200px;
}
.bg-purple {
  background: pink;
  height: 300px;
}
 
</style>
