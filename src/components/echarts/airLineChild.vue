<template>
    <div>
        <p>接受父组件消息--{{ addmessage }}</p>
        <h5 @click="toFather">{{ doThing }}</h5>
    </div>
</template>

<script>
export default {
  // 父子传值，标签传递，props接受（父向子）
  props: {
    addmessage: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      doThing: '子组件数据（向父传（自定义事件）',
    }
  },
  methods: {
    toFather() {
      this.$emit('toDo', 'child数据')// 自定义事件，子向父传值
    },
  }
}
</script>

<style lang="less" scoped>
</style>
