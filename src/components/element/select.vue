<template>
  <div class="selectContainer">
    <div class="radioContent">
      <el-row>
        <el-button round @click="getMock">获取影视名</el-button>
        <el-button type="primary" round @click="getEasyMock">获取漫威英雄</el-button>
        <!-- <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button> -->
      </el-row>
    </div>
    <p>影视名：{{ name }}</p>
    <p>周年：{{ age }}</p>
    <p>类型：{{ type }}</p>
      <!-- <button @click='manwei'>触发事件</button> -->
      <ul>
        <li>{{filmMessage}}</li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    // mock1
    getMock() {
      this.$store.dispatch('getHeros')
      this.$axios
        .get('/echart')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getEasyMock() {
      this.$store.dispatch('getFileMessage')
    }

    // 方法一 组件里面提交mutation的方法
    // ...mapMutations(['GETHROS'])
    // 方法二 组件里面提交mutation的方法
    // ...mapMutations({
    //     add: 'GETHROS'
    // })

    // 方法二 组件里面分发actions
    // ...mapActions(['getHeros'])
    // 方法三 组件里面分发actions
    // ...mapActions({
    //     add:'getHeros'
    //     })
  },
  computed: {
    // 方法一 组件里面获取state中的状态值
    // ...mapState({
    //     name:state=>state.name,
    //     age:state=>state.age,
    // }),

    // 方法二 组件里面获取state中的状态值
    ...mapState(['type', 'age', 'name', 'herosData', 'filmMessage'])

    // 方法三 组件里面获取state中的状态值
    // manwei() {
    //     return this.$store.state.name
    // }
  },
  mounted: function () {
    // 方法一 组件里面分发actions
    // this.$store.dispatch('getHeros')
    console.log(this.filmMessage, 'ewe')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.radioContent {
  width: 100%;
}
</style>
