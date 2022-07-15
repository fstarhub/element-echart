<template>
  <el-container>
    <el-main>
      <el-row>
        <el-form inline :model="searchForm">
          <el-form-item>
            <el-input v-model="searchForm.searchValue" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
            <el-button type="primary" @click="doNewadd">新增 &nbsp;|<i class="el-icon-circle-plus-outline el-icon--right"></i></el-button>
            <el-button type="primary" @click="doDownload">下载列表数据 &nbsp;|<i class="el-icon-folder el-icon--right"></i></el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <el-table
          :data="tableDataForEmergencySpace"
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
            label="空间&设施名称"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="空间&设施编号"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="空间&设施类型"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="所在区"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="所在流域"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="所在河流"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="操作"
            min-width="160">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="showDetail(scope.row)">查看</el-button>
              <el-button size="small" @click="doEdit(scope.row)">编辑</el-button>
              <el-button size="small" @click="doDelete(scope.row)">删除</el-button>
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
  name: 'emergencySpace',
  data() {
    return {
      searchForm: {
        searchValue: '',
      },
      tableDataForEmergencySpace: [
        {
          name: 'lisi',
          date: 'le'
        }
      ]
    }
  },
  methods: {
    doSearch() {

    },
    doNewadd() {

    },
    doDownload() {

    },
    showDetail(row) {

    },
    doEdit(row) {

    },
    doDelete(row) {

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
.el-icon-circle-plus-outline {
  vertical-align: middle;
}
.el-icon-folder {
  vertical-align: middle;
}
</style>
