<template>
    <div class="selectContainer">
        <div class="radioContent">
            <el-radio-group v-model="radioTreaty" @change="agreeChange">
                <el-radio label="不同意" border>不同意</el-radio>
                <el-radio label="同意" border>同意</el-radio>
            </el-radio-group>
            <el-button type="primary" :disabled="btnstatus" style="width: 180px;">提交订单</el-button>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 j" border></el-checkbox>
                <el-checkbox label="复选框 q"></el-checkbox>
                <el-checkbox label="复选框 k"></el-checkbox>
                <el-button type="primary" @click="alertThing" style="width: 180px;">提交订单</el-button>
            </el-checkbox-group>
            <el-input placeholder="请输入内容" v-model="input" clearable show-password></el-input>
            <el-time-picker
                v-model="value1"
                :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="任意时间点"
            ></el-time-picker>
            <el-time-picker
                arrow-control
                v-model="value2"
                :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="任意时间点"
            ></el-time-picker>
            <el-button type="primary" @click="alertTime" style="width: 180px;">提交订单</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radioTreaty: '1',
            btnstatus: true,
            checkList: [],
            input: '',
            value1: new Date(2020, 0, 15, 18, 40),
            value2: new Date(2020, 0, 14, 18, 40) // 2020年1月14日18点40
        }
    },
    methods: {
        agreeChange(val) {
            console.log(this.radioTreaty)
            this.btnstatus = val === '不同意' ? true : false
        },
        alertThing() {
            console.log(this.checkList)
        },
        alertTime() {
            console.log(this.value1)
            console.log(this.value2)
        }
    },
    mounted: function() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
