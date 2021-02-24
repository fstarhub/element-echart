<template>
    <div class="selectContainer">
        <div class="radioContent">
            <el-row>
                <el-button round @click="getMock">获取英雄</el-button>
                <el-button type="primary" round @click="getEasyMock">easyMock</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
            </el-row>
        </div>
        <p>年龄{{ age }}</p>
        <p>名字{{ name }}</p>
        <p>英雄{{ person }}</p>
        <!-- <button @click='manwei'>触发事件</button> -->
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    // mock1
    getMock() {
      this.$store.dispatch('getHeros')
      this.$axios.get('/echart')
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
    },
    getEasyMock() {
      this.$axios.get('https://mock.mengxuegu.com/mock/6035fa1eca363222f3d579e6/example/getHeros')
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
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
    ...mapState(['person', 'age', 'name',])

    // 方法三 组件里面获取state中的状态值
    // manwei() {
    //     return this.$store.state.name
    // }
  },
  mounted: function () {
    // 方法一 组件里面分发actions
    // this.$store.dispatch('getHeros')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>