<template>
  <el-container>
    <el-main>
      <el-row>
        <el-form inline :model="searchForm">
          <el-form-item label="">
            <el-input v-model="searchForm.searchValue" placeholder="请输入关键字"></el-input>
          </el-form-item>
          <el-form-item label="省份：">
            <el-select v-model="searchForm.shengfen" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row style="height: 56px; line-height: 56px; padding: 16px 16px auto;margin-bottom: 16px;">
        <el-col :span="12">
          <el-button type="primary" @click="doNewadd">新增 &nbsp;|<i class="el-icon-circle-plus-outline el-icon--right"></i></el-button>
        </el-col>
        <el-col :span="12" style="text-align: right; font-size: 14px; color: #333333;">
          数据总项<span class="msgTotal"> 123 </span>项
        </el-col>
      </el-row>
      <div class="testingOrganizatinContainer">
        <div class="organizationItem">
          <div class="organizationTitle">
            离合科技（湖南）股份有限公司
          </div>
          <el-form class="organizationForm" label-position="left" label-width="140px" :model="organizetionObj">
            <el-form-item label="省份">
              <span>134</span>
            </el-form-item>
            <el-form-item label="驻地">
              <span>134</span>
            </el-form-item>
            <el-form-item label="公司名称">
              <span>134</span>
            </el-form-item>
            <el-form-item label="采样分离工作人数">
              <span>134</span>
            </el-form-item>
            <el-form-item label="采样车辆辆数">
              <span>134</span>
            </el-form-item>
            <el-form-item label="联系人">
              <span>134</span>
            </el-form-item>
            <el-form-item label="电话">
              <span>134</span>
            </el-form-item>
          </el-form>
          <el-row style="text-align: center; margin-top: 20px;">
            <el-button type="primary" @click="doEdit" size="mini">编辑</el-button>
            <el-popover
              placement="top"
              width="160"
              v-model="deleteVisible">
              <p>删除后将不再列表展示，是否删除？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cancelDelete">取消</el-button>
                <el-button type="primary" size="mini" @click="confirmDelete">确定</el-button>
              </div>
              <el-button slot="reference" @click="doDelete" size="mini">删除</el-button>
            </el-popover>
          </el-row>
        </div>
        <div class="organizationItem">
          123
        </div>
        <div class="organizationItem">
          123
        </div>
        <div class="organizationItem">
          123
        </div>
        <div class="organizationItem">
          123
        </div>
        <div class="organizationItem">
          123
        </div>
      </div>
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
        shengfen: '',
      },
      // searchValue: '',
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
        organizetionObj: {},
        deleteVisible: false,
    }
  },
  methods: {
    doSearch() {

    },
    doNewadd() {

    },
    doEdit() {

    },
    doDelete() {

    },
    cancelDelete() {
      this.deleteVisible = false
    },
    confirmDelete() {
      this.deleteVisible = false
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

.msgTotal {
  color: #199DD4 
}

.testingOrganizatinContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .organizationItem {
    height: 356px;
    width: calc((100% - 48px)/4);
    background: white;
    margin-bottom: 16px;
    &:nth-of-type(4n) {
      margin-right: 0px;
    }
    &:not(:nth-child(4n)) {
      margin-right: 16px;
    }
    .organizationTitle {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 500;
      color: #FFFFFF;
      background: #199DD4;
      border-radius: 2px 2px 0px 0px;
      padding-left: 16px;
    }
  }
}

.organizationForm {
  padding-left: 16px;
  /deep/.el-form-item {
    margin-bottom: 0px;
  }
  /deep/.el-form-item__label {
    height: 34px;
  }
  /deep/.el-form-item__content {
    height: 34px;
    color: #666666;
  }
}

</style>
