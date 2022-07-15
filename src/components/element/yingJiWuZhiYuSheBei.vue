<template>
  <el-container>
    <el-main>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="应急材料清单" name="first">
          <el-form inline :model="searchFormForMaterial">
            <el-form-item label="行政区划：">
              <el-select v-model="searchFormForMaterial.xingzheng1" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="searchFormForMaterial.xingzheng2" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="searchFormForMaterial.xingzheng3" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="企业名称：">
              <el-input style="width: 300px" v-model="searchFormForMaterial.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
              <el-button type="primary" @click="doReset">重置 &nbsp;|<i class="el-icon-refresh-left el-icon--right"></i></el-button>
            </el-form-item>
          </el-form>
          <el-row>
            <el-table
              :data="tableDataForMaterial"
              border
              :header-cell-style="{textAlign: 'center'}"
              :cell-style="{textAlign: 'center'}"
              style="width: 100%">
              <el-table-column
                type="index"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="date"
                label="名称"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="存放地点"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="管理人"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="联系电话"
                min-width="120">
              </el-table-column>
              <el-table-column
                label="数量"
                min-width="120">
              </el-table-column>
            </el-table>
          </el-row>
          <el-row style="text-align: right">
            <el-pagination
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="车辆工程机械清单" name="second">
          <el-form inline :model="searchFormForMechanics">
            <el-form-item label="行政区划：">
              <el-select v-model="searchFormForMechanics.xingzheng1" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="searchFormForMechanics.xingzheng2" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="searchFormForMechanics.xingzheng3" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="企业名称：">
              <el-input style="width: 300px" v-model="searchFormForMechanics.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
              <el-button type="primary" @click="doReset">重置 &nbsp;|<i class="el-icon-refresh-left el-icon--right"></i></el-button>
            </el-form-item>
          </el-form>
          <el-row>
            <el-table
              :data="tableDataForMechanics"
              border
              :header-cell-style="{textAlign: 'center'}"
              :cell-style="{textAlign: 'center'}"
              style="width: 100%">
              <el-table-column
                type="index"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="date"
                label="车型"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="车号"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="司机"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="应急功能"
                min-width="120">
              </el-table-column>
            </el-table>
          </el-row>
          <el-row style="text-align: right">
            <el-pagination
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'emergencyMaterial',
  data() {
    return {
      activeName: 'first',
      searchFormForMaterial: {
        xingzheng1: '',
        xingzheng2: '',
        xingzheng3: '',
        name: '',
      },
      searchFormForMechanics: {
        xingzheng1: '',
        xingzheng2: '',
        xingzheng3: '',
        name: '',
      },
      tableDataForMaterial: [],
      tableDataForMechanics: [],
      options:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
    }
  },
  methods: {
    handleClick() {

    },
    doSearch() {

    },
    doReset() {

    },
  }
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

.el-icon-search {
  vertical-align: middle;
}
.el-icon-refresh-left {
  vertical-align: middle;
}

</style>
