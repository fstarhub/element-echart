<template>
    <div class="hello">
        <h1>ui测试</h1>
        <div class="elTes">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    下拉菜单
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                    <el-dropdown-item command="b">狮子头</el-dropdown-item>
                    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item command="d">双皮奶</el-dropdown-item>
                    <el-dropdown-item command="e">蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-button plain>朴素按钮</el-button>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            isCollapse: true,
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ]
        }
    },
    methods: {
        handleCommand(command) {
            this.$message('click on item ' + command)
        },
        getColor(key, keyPath) {
            console.log(key, keyPath)
            if ((key = 1 && keyPath)) {
                // var item=document.getElementsByClassName('spanName')
                // console.log(item)
                // item.style.backgroundColor='red';
                // this.flag=true
                console.log(this.flag)
            } else {
                this.flag = false
                console.log('shibai')
            }
        }
    }
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
