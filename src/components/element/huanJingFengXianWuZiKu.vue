<template>
  <el-container>
    <el-main>
      <el-row>
        <el-form inline :model="searchForm">
          <el-form-item label="">
            <el-input v-model="searchForm.searchValue" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="searchForm.value1" placeholder="请选择污染物分类">
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
          :data="tableDataForRiskMaterial"
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
            label="名称"
            min-width="140">
          </el-table-column>
          <el-table-column
            prop="name"
            label="建议应急物资"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="流域水环境污染应急处置技术"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="自来水污染应急处置技术"
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
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'componentName',
  data() {
    return {
      searchForm: {
        searchValue: '',
        value1: '',
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
      tableDataForRiskMaterial: [],
    }
  },
  methods: {
    doSearch() {

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
</style>
