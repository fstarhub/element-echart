<template>
    <div class="indexContainer">
        <div class="indexBox">欢迎来到我的项目</div>
        <div class="mainContainer">
            <div @click="$router.push('/element')" class="left">
                <div class="inner leftInner">element-ui</div>
            </div>
            <div @click="$router.push('/echarts')" class="right">
                <div class="inner rightInner">echarts</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    components: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.indexContainer {
    .indexBox {
        margin-top: 20px;
    }
    .mainContainer {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
        .left {
            width: 200px;
            height: 200px;
            color: springgreen;
            background: slateblue;
        }
        .right {
            width: 200px;
            height: 200px;
            color: fuchsia;
            background: darkkhaki;
        }
        .inner {
            margin-top: 45%;
            font-size: 30px;
        }
    }
}
</style>
