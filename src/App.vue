<template>
    <div id="app">
        <span>hi fengstar</span>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 20px;
    span {
        color: lightcoral;
        font-size: 30px;
        font-weight: 800;
    }
}
</style>
