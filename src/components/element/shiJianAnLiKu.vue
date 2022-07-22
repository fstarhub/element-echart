<template>
  <el-container>
    <el-main>
      <el-row>
        <el-form inline :model="searchForm">
          <el-form-item label="">
            <el-input v-model="searchForm.searchValue" placeholder="实践案例名称"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="searchForm.value1" placeholder="请选择污染物内省">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="searchForm.value2" placeholder="请选择案例类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="searchForm.value3" placeholder="请选择关键字">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
         <el-table
          :data="tableDataForCase"
          border
          :header-cell-style="{textAlign: 'center'}"
          :cell-style="{textAlign: 'center'}"
          style="width: 100%">
          <el-table-column
            label="序号"
            type="index"
            width="60">
          </el-table-column>
          <el-table-column
            prop="name"
            label="实践案例名称"
            min-width="320">
          </el-table-column>
          <el-table-column
            prop="name"
            label="事件原因"
            min-width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="80">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="showDetail(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row style="text-align: right">
         <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'shiJianAnLiKu',
  data() {
    return {
      searchForm: {
        searchValue: '',
        value1: '',
        value2: '',
        value3: '',
      },
      options: [{
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
      tableDataForCase: []
    }
  },
  methods: {
    doSearch() {

    },
    showDetail(row) {

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
</style>
