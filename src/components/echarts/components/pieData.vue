<template>
  <el-container>
    <el-main>
      <div class="titlecontainer">
        <div class="title">
          <p class="titleName">申报情况概览</p>
          <p class="detail">截止竞价日2020年6月3日&nbsp;10:00</p>
        </div>
        <div class="select"><span>发电侧</span><span>&nbsp;|&nbsp;</span><span>用电侧</span></div>
      </div>
      <!-- <div id="echarts_pie" class="echarts_pie"/> -->
      <div id="echarts_pie" class="echartsContainer"/>
      <div class="apply">
        <div class="applyTittle">
          <p>主动申报</p>
          <p>{{percentage}}%</p>
        </div>
        <div class="applyContainer">
          <el-progress :percentage="percentage"></el-progress>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name:'pie',
  data() {
    return {
      percentage: 70,
      pieData: [
                {value: 335, name: '火电'},
                {value: 310, name: '风电'},
                {value: 234, name: '光伏'},
                {value: 135, name: '水电'}
              ]
    }
  },
  methods: {
    situationOverview() {
      const data = this.pieData
      let myChart = this.$echarts.init(document.getElementById('echarts_pie'))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#975FE4', '#3AA0FF', '#36CBCB', '#FAD337'],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          top: '20%',
          right: '10%',
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6,
          // data: ['火电', '风电', '光伏', '水电'],
          formatter: function(name, value) {
            var target
            var l = data.length
            var total = data.reduce((pre, cur, index) => {
              return pre + cur.value
            }, 0)
            for (var i = 0; i < l; i++) {
              if (data[i].name === name) {
                target = data[i].value
                return [name + ' | ' + '    ' + ((target / total) * 100).toFixed(1) + '%' + '    ' + data[i].value].join('\n')
              }
            }
          }
        },
        series: [
          {
            name: '申报情况',
            type: 'pie',
            // left: '-150',
            // top: '-40',
            radius: ['60%', '75%'],
            center: ['25%', '50%'],
            avoidLabelOverlap: true,
            silent: false,
            hoverOffset: 0,
            hoverAnimation: false,
            label: {
              show: true,
              position: 'center',
              formatter: () => {
                var total = data.reduce((pre, cur, index) => {
                  return pre + cur.value
                }, 0)
                return '{a|' + '全部机组' + '}' + '\n' + '{b|' + total + '}'
              },
              rich: {
                a: {
                  fontSize: 13,
                  color: '#979797',
                },
                b: {
                  fontSize: 13,
                  color: '#272727',
                  // lineHeight: 20
                }
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
            data: this.pieData,
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: '#ffffff',
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      myChart.setOption(option)
    }
  },
  mounted:function() {
    this.situationOverview()
  }
}
</script>

<style lang="less" scoped>
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
.title p {
  margin: 0;
}
.title > .detail {
  margin-top: 10px;
}
.echartsContainer {
  width: 100%;
  height: 150px;
  /* background: white; */
}
.apply {
  width: 100%;
  height: 70px;
  /* background: yellow; */
  position: relative;
  overflow: hidden;
}
.applyTittle {
  width: 150px;
  text-align: center;
  margin-top: 20px;
}
.applyTittle p {
  margin: 0;
  font-size: 14px;
}
.applyContainer {
  width: 170px;
  overflow: hidden;
  position: absolute;
  top: 30px;
  right: 20px;
}
/deep/ .el-progress__text {
  visibility: hidden;
}
</style>