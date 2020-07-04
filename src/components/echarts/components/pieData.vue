<template>
  <el-container>
    <el-main>
      <div class="titlecontainer">
        <div class="title">
          <p>申报情况概览</p>
          <p class="detail">截止竞价日2020年6月3日&nbsp;10:00</p>
        </div>
        <div class="select"><span>发电侧</span><span>&nbsp;|&nbsp;</span><span>用电侧</span></div>
      </div>
      <!-- <div id="echarts_pie" class="echarts_pie"/> -->
      <div id="echarts_pie" class="echartsContainer"/>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name:'pie',
  data() {
    return {
    }
  },
  methods: {
    situationOverview() {
      let myChart = this.$echarts.init(document.getElementById('echarts_pie'))
      const data = [
        {value: 335, name: '火电'},
        {value: 310, name: '风电'},
        {value: 234, name: '光伏'},
        {value: 135, name: '水电'}
      ]
      let option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            top: '15%',
            right: '35%',
            icon: 'circle',
            itemWidth: 6,
            itemHeight: 6,
            data: ['火电', '风电', '光伏', '水电']
          },
          series: [
            {
              name: '风电数据',
              type: 'pie',
              // left: '-150',
              // top: '-40',
              radius: ['35%', '50%'],
              center: ['25%', '40%'],
              avoidLabelOverlap: true,
              silent: true,
              hoverOffset: 0,
              hoverAnimation: false,
              label: {
                show: true,
                position: 'center',
                formatter: () => {
                  return '全部机组\n 25'
                },
                textStyle: {
                  fontSize: 12,
                  color: 'red'
                }
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '14',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 335, name: '火电'},
                {value: 310, name: '风电'},
                {value: 234, name: '光伏'},
                {value: 135, name: '水电'}
              ]
            }
          ],
          // graphic: {
          //   type: 'text',
          //   left: 'center',
          //   top: 'center',
          //   style: {
          //     text: '烟尘',
          //     textAlign: 'center',
          //     fill: 'rgb(149,162,255)',
          //     width: 30,
          //     height: 30,
          //   }
          // },
      };
      myChart.setOption(option)
    }
  },
  mounted:function() {
    this.situationOverview()
  }
}
</script>

<style scoped>
 .titlecontainer {
   width: 100%;
   overflow: hidden;
   position: relative;
 }
 .title {
   text-align: left;
   font-size: 13px;
 }
 .select {
   font-size: 15px;
   position: absolute;
   top: 0;
   right: 0;
 }
 p {
   margin: 0;
 }
 .detail {
   margin-top: 10px;
 }
 .echartsContainer {
   width: 100%;
   height: 200px;
   background: blue;
 }
</style>
