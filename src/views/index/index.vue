<template>
    <div class="indexContainer">
        <div class="indexBox">欢迎来到我的项目</div>
        <div class="mainContainer">
            <div class="left">
                <div class="inner">element-ui</div>
            </div>
            <div class="right">
                <div class="inner">echarts</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    components: {
    }
}

</script>

<style>
.indexContainer {
    width: 100%;
}
.mainContainer {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    align-content: center;
}
.left {
    width: 200px;
    height: 200px;
    text-align: center;
    background: darkorange;

}
.right {
    width: 200px;
    height: 200px;
    text-align: center;
    background: salmon;
}
</style>