<template>
  <el-container>
    <el-main>
      <el-row>
        <el-form inline>
          <el-form-item label="演练名称：">
            <el-input v-model="searchValue" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="演练时间：">
            <el-date-picker
              v-model="serachDate"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doSearch">查询 &nbsp;|<i class="el-icon-search el-icon--right"></i></el-button>
            <el-button type="primary" @click="doAdd">新增 &nbsp;|<i class="el-icon-circle-plus-outline el-icon--right"></i></el-button>
            <!-- <el-button type="primary" @click="doDownload">下载列表数据</el-button> -->
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
         <el-table
          :data="tableDataForEmergency"
          border
          :header-cell-style="{textAlign: 'center'}"
          :cell-style="{textAlign: 'center'}"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="演练名称"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="演练地点"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="演练时间"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="演练方式"
            min-width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="160">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="doDownload(scope.row)">下载</el-button>
              <el-button size="small" @click="doEdit(scope.row)">修改</el-button>
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
      <el-dialog
        title="新增应急演练"
        :visible.sync="newAddDialog"
        width="40%">
        <el-form inline label-position="left" label-width="90px" :model="newAddForm">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="演练名称：">
                <el-input class="formInput" v-model="newAddForm.name" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="演练地点：">
                <el-input v-model="newAddForm.address" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="协助单位：">
                <el-input v-model="newAddForm.danwei" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="参加人数：">
                <el-input v-model="newAddForm.renshu" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item class="formItemDate" label="演练时间：">
                <el-date-picker
                  v-model="newAddForm.shijian"
                  type="date"
                  style="width: 200"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="演练方式：">
                <el-input v-model="newAddForm.fangshi" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="演练类别：">
                <el-input v-model="newAddForm.leibie" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item class="formItemPlan" label="演练场景与计划：">
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入"
                v-model="newAddForm.plan">
              </el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item class="formItemPlan" label="演练过程描述总结：">
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入"
                v-model="newAddForm.plan">
              </el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label=" ">
              <span class="uploaderTitle">图片上传</span>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label=" ">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="newAddForm.imageUrl" :src="newAddForm.imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelNewAdd">返 回</el-button>
          <el-button type="primary" @click="confirmNewAdd">提 交</el-button>
        </span>
      </el-dialog>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'emergencyMamagement',
  data() {
    return {
      searchValue: '',
      serachDate: '',
      tableDataForEmergency: [
        {
          name: 'lisi',
          date: 'le'
        }
      ],
      newAddDialog: false,
      newAddForm: {
        name: '',
        address: '',
        danwei: '',
        renshu: '',
        shijian: '',
        fangshi: '',
        leibie: '',
        plan: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    doSearch() {

    },
    doAdd() {
      this.newAddDialog = true
    },
    doDownload() {

    },
    doDownload(row) {

    },
    doEdit(row) {
      this.newAddDialog = true
    },
    doDelete(row) {

    },
    cancelNewAdd() {

    },
    confirmNewAdd() {
      this.newAddDialog = false
    },

     handleAvatarSuccess(res, file) {
        // this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      }
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

/deep/.el-dialog__body {
  padding: 30px 20px 30px 40px;
}

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px solid #DCDEE0;
    background: #DCDEE0;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .uploaderTitle {
    color: #323233;
    font-size: 16px;
    font-weight: 600;
  }

  /deep/.formItemDate .el-input__inner {
    width: 202px;
  }
  /deep/.formItemPlan {
    width: 100%;
  }
  /deep/.formItemPlan .el-form-item {
    width: 100%;
  }
  /deep/.formItemPlan .el-form-item__content {
    width: 80%;
  }

.el-icon-search {
  vertical-align: middle;
}
.el-icon-circle-plus-outline {
  vertical-align: middle;
}

</style>
