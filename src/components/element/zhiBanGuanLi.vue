<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="leftContainer">
            <el-date-picker
              v-model="date"
              type="date"
              style="width: 100%"
              placeholder="选择日期">
            </el-date-picker>
            <div class="addPeo per">
              <span></span> 添加月度值班人员
            </div>
            <div class="leader per">
              <span></span> 值班领导
            </div>
            <div class="staff per">
              <span></span> 值班员工
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="rightContainer">
            <div class="containerHeader">
              <div class="controlBox">
                <span class="leftYear eve" @click="leftArrowYear">&lt;&lt;</span>&nbsp;&nbsp;&nbsp;
                <span class="leftMonth eve" @click="leftArrowMonth">&lt;</span>&nbsp;&nbsp;
                <span>{{titleYear}}年{{titleMonth}}月</span>&nbsp;&nbsp;
                <span class="rightMonth eve" @click="rightArrowMonth">&gt;</span>&nbsp;&nbsp;&nbsp;
                <span class="rightYear eve" @click="rightArrowYear">&gt;&gt;</span>
              </div>
              <div class="tool">
                <el-button @click="doExport">列表导出</el-button>
                <el-button @click="doImport">列表导入</el-button>
                <el-button type="primary" @click="doDownload">模板下载</el-button>
              </div>
            </div>
            <div class="calendar">
              <el-calendar v-model="value">
                <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
                <template
                  slot="dateCell"
                  slot-scope="{date, data}">
                  <div @click="viewDayWork(data)">
                    <p :class="data.isSelected ? 'is-selected' : ''">
                      {{ data.day.split('-').slice(1)[1] }} {{ data.isSelected ? '✔️' : ''}}
                      <br />
                      <span>zhangsan</span>
                    </p>
                  </div>
                </template>
              </el-calendar>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-dialog
        title="提示"
        :visible.sync="cellVisible"
        width="30%">
        <span>日期{{ddd}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cellVisible = false">取 消</el-button>
          <el-button type="primary" @click="cellVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'zhiBanGuanLi',
  data() {
    return {
      date: '',
      value: '',
      cellVisible: false,
      titleYear: '',
      titleMonth: '',
      ddd: '',
    }
  },
  mounted() {
    const DATE = new Date()
    this.titleYear = DATE.getFullYear()
    this.titleMonth = DATE.getMonth() + 1
  },
  methods: {
    viewDayWork(data) {
      console.log(data);
      this.ddd = data.day
      this.cellVisible = !this.cellVisible
    },
    doExport() {
      alert('eee')
    },
    doImport() {
      alert('rrr')
    },
    doDownload() {
      alert('aaa')
    },
    leftArrowYear() {
      alert('向左一年')
    },
    leftArrowMonth() {
      alert('向左一月')
    },
    rightArrowMonth() {
      alert('向右一月')
    },
    rightArrowYear() {
      alert('向右一年')
    },
  },
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-main {
  width: 100%;
  text-align: left;
}

.leftContainer {
  padding: 16px;
  height: 900px;
  font-size: 14px;
  color: #333333;
  background: pink;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.addPeo {
  span {
    display: inline-block;
    width: 20px;
    height: 18px;
    vertical-align: middle;
    background: url('./assets/add_peo.png') no-repeat;
  }
}
.leader {
  span {
    display: inline-block;
    width: 20px;
    height: 18px;
    vertical-align: middle;
    background: url('./assets/flag_leader.png') no-repeat;
  }
}
.staff {
  span {
    display: inline-block;
    width: 20px;
    height: 18px;
    vertical-align: middle;
    background: url('./assets/flag_staff.png') no-repeat;
  }
}
.per {
  margin-top: 16px;
  cursor: pointer;
}

.rightContainer {
  height: 900px;
  width: 100%;
  background: pink;
  .containerHeader {
    height: 68px;
    line-height: 68px;
    text-align: center;
    // background: lightsteelblue;
    position: relative;
    .controlBox {
      .eve {
        cursor: pointer;
      }
    }
    .tool {
      position: absolute;
      top: 0px;
      right: 16px;
    }
  }
  .calendar {
    text-align: center;
  }
}


/deep/.el-calendar__header {
  display: none;
}
</style>
