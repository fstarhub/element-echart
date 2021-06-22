<template>
  <el-container style="width: 100%;">
    <el-main>
      <div style="width: 100%; height: 300px">
          <vxe-table
            border
            height="auto"
            :data="tableData">
            <vxe-table-column type="seq" width="60"></vxe-table-column>
            <vxe-table-column field="name" title="Name"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex"></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
            <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
          </vxe-table>
        </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'table',
  data() {
    return {
      tableData:[
        {
          name: 'zhangsan',
          sex: '男',
          age: 14,
          address: '胡同小街'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
