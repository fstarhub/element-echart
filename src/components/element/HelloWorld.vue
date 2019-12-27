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

        <!-- <div class="iconfont">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-weixin></use>
      </svg>
        </div>-->
        <div class="nabMenu">
            <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" @select="getColor">
        <el-submenu active-text-color="#ccc" index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span :class="{active:this.flag==true}" slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
            </el-menu>-->

            <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
            </el-menu>-->

            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="red"
            >
                <!-- <el-menu-item index="1">处理中心</el-menu-item> -->
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
            </el-menu>
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
                    value: '选项',
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
            ],
            value: ''
            // activeIndex: '1',
            // activeIndex2: '1'
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
