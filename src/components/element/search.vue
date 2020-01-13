<!-- 表格搜索 -->
<template>
    <div>
        <el-input v-model="tableDataName" placeholder="请输入姓名" style="width:240px"></el-input>
        <el-button type="primary" @click="doFilter">搜索</el-button>
        <el-table :data="tableDataEnd" border style="width: 100%">
<<<<<<< HEAD
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
=======
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
>>>>>>> 0622a466da6793f0c06bc31b3eb208a88b2dc280
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalItems"
            next-text="下一页"
            prev-text="上一页"
        ></el-pagination>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            tableDataBegin: [
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王二虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王二虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },
                {
                    date: '2016-05-05',
                    name: '王三虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-06',
                    name: '王三虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            tableDataName: '',
            tableDataEnd: [],
            currentPage: 4,
            pageSize: 2,
            totalItems: 0,
            filterTableDataEnd: [],
            flag: false
        }
    },
    //组件的方法集合
    methods: {
        //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
        //用两个变量接收currentChangePage函数的参数
        doFilter() {
            if (this.tableDataName == '') {
                this.$message.warning('查询条件不能为空！')
                return
            }
            this.tableDataEnd = []
            //每次手动将数据置空,因为会出现多次点击搜索情况
            this.filterTableDataEnd = []
            this.tableDataBegin.forEach((value, index) => {
                if (value.name) {
                    if (value.name.indexOf(this.tableDataName) >= 0) {
                        this.filterTableDataEnd.push(value)
                    }
                }
            })
            //页面数据改变重新统计数据数量和当前页
            this.currentPage = 1
            this.totalItems = this.filterTableDataEnd.length
            //渲染表格,根据值
            this.currentChangePage(this.filterTableDataEnd)
            //页面初始化数据需要判断是否检索过
            this.flag = true
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`)
            this.pageSize = val
            this.handleCurrentChange(this.currentPage)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
            this.currentPage = val
            //需要判断是否检索
            if (!this.flag) {
                //tableDataBegin不能写成tableDataEnd，不然在没有进行搜索功能的时候，不能进行分页操作，数据丢失
                this.currentChangePage(this.tableDataBegin)
            } else {
                this.currentChangePage(this.filterTableDataEnd)
            }
        }, //组件自带监控当前页码
        currentChangePage(list) {
            let from = (this.currentPage - 1) * this.pageSize
            let to = this.currentPage * this.pageSize
            this.tableDataEnd = []
            for (; from < to; from++) {
                if (list[from]) {
                    this.tableDataEnd.push(list[from])
                }
            }
        }
    },
    //监控data中的数据变化：一个数据影响多个数据
    watch: {},
    //监听属性：一个数据受多个数据影响
    computed: {
        // 模糊搜索
        tables() {
            const search = this.search
            if (search) {
                // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
                // 注意： filter() 不会对空数组进行检测。
                // 注意： filter() 不会改变原始数组。
                return this.dormitory.filter(data => {
                    // some() 方法用于检测数组中的元素是否满足指定条件;
                    // some() 方法会依次执行数组的每个元素：
                    // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
                    // 如果没有满足条件的元素，则返回false。
                    // 注意： some() 不会对空数组进行检测。
                    // 注意： some() 不会改变原始数组。
                    return Object.keys(data).some(key => {
                        // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
                        // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
                        return (
                            String(data[key])
                                .toLowerCase()
                                .indexOf(search) > -1
                        )
                    })
                })
            }
            return this.dormitory
        }
    },
    beforeCreate: function() {
        // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
    },
    created: function() {
        // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，el 属性目前不可见。
        this.totalItems = this.tableDataBegin.length
        if (this.totalItems > this.pageSize) {
            for (let index = 0; index < this.pageSize; index++) {
                this.tableDataEnd.push(this.tableDataBegin[index])
            }
        } else {
            this.tableDataEnd = this.tableDataBegin
        }
    },
    beforeMount: function() {
        // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    },
    mounted: function() {
        // 编译好的HTML挂载到页面完成后执行的事件钩子
        // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
        // 此钩子函数中一般会做一些ajax请求获取数据进行数据初始化,可访问DOM元素
        console.log('Home done')
    },
    beforeUpdate: function() {
        // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
    },
    updated: function() {
        // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
        // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
        // 该钩子在服务器端渲染期间不被调用。
    },
    beforeDestroy: function() {
        // 实例销毁之前调用。在这一步，实例仍然完全可用。
    },
    destroyed: function() {
        // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
    },
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
