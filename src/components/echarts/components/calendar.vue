<template>
  <el-container>
    <el-main>
      <div class="calendatContainer">
        <div class="nowTime">{{year}}年{{month}}月{{date}}日&nbsp;{{day}}</div>
        <div class="selectForm">
          <!-- <el-form inline>
            <el-form-item> -->
              <el-select v-model="value" placeholder="2020">
                <el-option
                  v-for="item in selectYear"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="2020">
                <el-option
                  v-for="item in selectYear"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            <!-- </el-form-item>
            
          </el-form> -->
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      selectYear: [{ value: 2019,label: 2019 }, { value: 2020, label: 2020}],
      year: '',
      month: '',
      date: '',
      day: ''
    }
  },
  mounted() {
    this.getToday()
  },
  methods: {
    getToday() {
      var today = new Date()
      var year = today.getFullYear()
      var month = today.getMonth() + 1
      var date = today.getDate()
      // var day = today.getDay()
      // console.log(day)
      this.year = year
      this.month = month
      this.date = date
      // this.day = day
      if(today.getDay() === 1){
        return this.day = '星期一'
      } else if(today.getDay() === 2){
       return this.day = '星期二'
      } else if(today.getDay() === 3){
        return this.day = '星期'
      } else if(today.getDay() === 4){
        return this.day = '星期四'
      } else if(today.getDay() === 5){
        return this.day = '星期五'
      } else if(today.getDay() === 6){
        return this.day = '星期六'
      } else {
        return this.day = '星期日'
      }
        return today
    }
  },
}
</script>

<style lang="less" scoped>
.calendatContainer {
  width: 100%;
  height: 30px;
  position: relative;
  .nowTime {
    height: 100%;
    width: 44%;
    font-size: 14px;
    text-align: left;
    line-height: 30px;
  }
  .selectForm {
    height: 100%;
    width: 56%;
    background: blue;
    position: absolute;
    top: 0;
    right: 0;
  }
}
.el-select>.el-input {
  width: 30%;
}
.el-input__inner {
  height: 30px;
}
.el-input__suffix {
  right: -5px
}
.el-input--suffix .el-input__inner {
  padding-right: 14px;
  padding-left: 2px;
}
</style>
