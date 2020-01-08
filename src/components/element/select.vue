<template>
    <div class="hello">
        <h1>element测试</h1>
        <div class="elTes">
            haha
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.el-dropdown-menu {
    background: blue;
    border: 1px solie red;
}
.el-dropdown-menu__item {
    color: white;
}
.el-dropdown-menu__item:hover {
    background: pink;
    color: purple;
}
.el-button.is-plain:hover {
    background: red;
    border: 1px solid blue;
    color: yellow;
}
.table {
    width: 800px;
    height: 500px;
}
.el-table__body tr {
    color: blue;
    height: 52px;
}
.nabMenu {
    /* height: 300px; */
    width: 800px;
}
.active {
    color: yellow;
}
</style>
