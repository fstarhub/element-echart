<template>
  <div class="selectContainer">
    <el-table
      :data="tableData1"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
      label="序号"
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
      <el-button round @click="getMock">mock数据</el-button>
      <el-button type="primary" round @click="getData">请求后台</el-button>
      <el-button type="success" round @click="doDispatch">dispatch</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <p>年龄{{ age }}</p>
    <p>名字{{ name }}</p>
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
import axios from 'axios'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      tableData1: []
    }
  },
  mounted: function () {
    // this.$store.dispatch('getHeros')
    this.init()
  },
  methods: {
    async getData() {
      const result = await axios.get('/admin/user/add')
      console.log(result, 'result')
    },
    init() {
      console.log(this, 'this')
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
          fatherId: fatNum - 1,
          time: item.tiem,
          energy: item.energy,
          price: item.price
        })
        arrDate.children.push(childData)
        console.log(arrDate, 'arrdata')
      })
      // this.tableData1 = message
    },
    // mock1
    getMock() {
      this.$axios.get('/echart')
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
    },
    doDispatch() {
      // 分发actions，方法一  this.$store.dispatch('getHeros',{name: 23})增加载荷
      // this.$store.dispatch('getHeros')
      // 以对象形式分发
      // this.$store.dispatch({
      //   type: 'getHeros',
      //   amount: 10
      // })
      // 分发actions，方法二 
      // ...mapActions(['getHeros', 'getMes1', 'getMsg2'])
      // 分发actions，方法三 
      // ...mapActions({
      //     add:'getHeros'
      //     })
    },
    // 分发actions，方法二 
    // ...mapActions(['getHeros', 'getMes1', 'getMsg2'])

    // 获取state中的状态值，方法一 组件里面获取state中的状态值
    // ...mapState({
    //     name:state=>state.name,
    //     age:state=>state.age,
    // 获取state中的状态值，方法二 组件里面获取state中的状态值
    // manwei() {
    //     return this.$store.state.name
    // }

    // 提交mutation的方法，方法一 组件里面提交mutation的方法
    // ...mapMutations(['GETHROS'], 123) // 增加载荷
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

  },
  computed: {
    // 获取state中的状态值，方法一 组件里面获取state中的状态值
    ...mapState({
      name: state => state.name,
      age: state => state.age,
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
