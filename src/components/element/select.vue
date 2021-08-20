<template>
    <div class="selectContainer">
        <div class="radioContent">
            <el-radio-group v-model="radioTreaty" @change="agreeChange">
                <el-radio label="不同意" border>不同意</el-radio>
                <el-radio label="同意" border>同意</el-radio>
            </el-radio-group>
            <el-button type="primary" :disabled="btnstatus" style="width: 180px;">提交订单</el-button>
            <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm.age"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
            :data="tableData1"
            style="width: 100%;margin-bottom: 20px;"
            row-key="id"
            border
            default-expand-all
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column
            label="序号"
            :formatter="formatIndex"
            width="80">
            </el-table-column>
            <el-table-column
            prop="time"
            label="时段类型"
            width="80">
            </el-table-column>
            <el-table-column
            prop="energy"
            label="电量">
            </el-table-column>
            <el-table-column
            prop="price"
            label="电价">
            </el-table-column>
        </el-table>
            <el-row>
                <el-button round @click='getMock'>mock1</el-button>
                <el-button type="primary" round>主要按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
            </el-row>
        <p>年龄{{age}}</p>
        <p>名字{{name}}</p>
        <!-- <p>英雄{{person}}</p> -->
        <!-- <button @click='manwei'>触发事件</button> -->
    </div>
    <!-- <p>影视名：{{ name }}</p>
    <p>周年：{{ age }}</p>
    <p>类型：{{ type }}</p> -->
      <!-- <button @click='manwei'>触发事件</button> -->
      <!-- <ul>
        <li>{{filmMessage}}</li>
      </ul>
  </div> -->
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'))
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'))
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'))
                    } else {
                        callback()
                    }
                }
            }, 1000)
        }
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            radioTreaty: '1',
            btnstatus: true,
            ruleForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules: {
                pass: [{ validator: validatePass, trigger: 'blur' }],
                checkPass: [{ validator: validatePass2, trigger: 'blur' }],
                age: [{ validator: checkAge, trigger: 'blur' }]
            },
            tableData1: []
        }
    },
    mounted: function() {
        this.$store.dispatch('getHeros')
        this.init()
    },
    methods: {
        init() {
            var message = [
                {
                    timepart1: 1,
                    time: 'shijian1',
                    energy: '342',
                    price: '3435',
                },
                {
                    timepart1: 1,
                    time: 'shijian1',
                    energy: '342',
                    price: '3435',
                },
                {
                    timepart1: 1,
                    time: 'shijian1',
                    energy: '342',
                    price: '3435',
                },
                {
                    timepart1: 2,
                    time: 'shijian2',
                    energy: '342',
                    price: '3435',
                },
                {
                    timepart1: 2,
                    time: 'shijian2',
                    energy: '342',
                    price: '3435',
                },
                {
                    timepart1: 3,
                    time: 'shijian3',
                    energy: '342',
                    price: '3435',
                },
                {
                    timepart1: 3,
                    time: 'shijian3',
                    energy: '342',
                    price: '3435',
                },
                {
                    timepart1: 3,
                    time: 'shijian3',
                    energy: '342',
                    price: '3435',
                },
            ]
            this.tableData1 = []
            let arrDate = {}
            let cunNum = 1
            let childNum = 0
            let fatNum = 1
            message.forEach((item, index) => {
                if (index) {
                    if (arrDate.timepart1 !== item.timepart1) {
                        console.log(item, 'item')
                    }

                } else {
                    arrDate = Object.assign({}, arrDate, {
                        id: cunNum++,
                        fatherId: fatNum++,
                        timepart1: item.timepart1,
                        tiem: item.time,
                        children: []
                    })
                }
                let childData = {}
                childData = Object.assign({}, childData, {
                    id: cunNum++,
                    childId: childNum++,
                    fatherId: fatNum -1,
                    time: item.tiem,
                    energy: item.energy,
                    price: item.price
                })
                arrDate.children.push(childData)
                console.log(arrDate, 'arrdata')
            })
            // this.tableData1 = message
        },
        formatIndex() {

        },
        agreeChange(val) {
            console.log(this.radioTreaty)
            this.btnstatus = val === '不同意' ? true : false
        },
        submitForm(formName) {
            const {pass,checkPass,age}=this.ruleForm
            console.log(pass,checkPass,age)
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
            var arr = [
                {
                    name: 'zhangsan',
                    id: '239876',
                    like: 'ball'
                },
                {
                    name: 'lisi',
                    id: '8968767',
                    like: 'pingpang'
                },
                {
                    name: 'waner',
                    id: '909090',
                    like: 'zuqiu'
                },
                {
                    name: 'zhaoai',
                    id: '1212',
                    like: 'haha'
                },
            ]
            const myNum = '1212'
            var getItem = function (item) {
                return item.id === myNum
            }
            var arr1 = arr.find(getItem)
            
            console.log(arr1,'arr112')
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
        // mock1
        getMock(){
            this.$axios.get('/echart')
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)})
        }
        // 获取state中的状态值，方法一 组件里面获取state中的状态值
        // ...mapState({ 
        //     name:state=>state.name,
        //     age:state=>state.age,
        // 获取state中的状态值，方法二 组件里面获取state中的状态值
        // manwei() {
        //     return this.$store.state.name
        // }
        
        // 提交mutation的方法，方法一 组件里面提交mutation的方法
        // ...mapMutations(['GETHROS'], 123)增加载荷
        // 提交mutation的方法，方法二 组件里面提交mutation的方法
        // ...mapMutations({
        //     add: 'GETHROS'
        // })
        // 提交mutation的方法，方法三 this.$store.commit('GETHROS'，123)增加载荷
        // 对象提交方式
        // this.$store.commit({
        //   type: 'increment',
        //   amount: 10
        // })
        
        // 分发actions，方法一  this.$store.dispatch('getHeros',{name: 23})增加载荷
        // 以对象形式分发
          // store.dispatch({
          //   type: 'incrementAsync',
          //   amount: 10
          // })
        // 分发actions，方法二 
        // ...mapActions(['getHeros', 'getMes1', 'getMsg2'])
        // 分发actions，方法三 
        // ...mapActions({
        //     add:'getHeros'
        //     })
    },
    computed:{
        // 获取state中的状态值，方法一 组件里面获取state中的状态值
        ...mapState({ 
            name:state=>state.name,
            age:state=>state.age,
        }),

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.radioContent {
  width: 100%;
}
</style>
