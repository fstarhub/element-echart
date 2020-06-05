<!-- 水球图 -->
<template>
    <div class="liquidFillContainer">
        <div id="liquidFill" class="liquidFillContent"></div>
        <Child :nameList='nameList'>
            <!-- 具名插槽，要使用template模板 -->
            <template slot="top">
                <div>
                    <h5>header</h5>
                </div>
            </template>
            <!-- 默认插槽 -->
            <h4>fillChild</h4>
            <!-- 作用域插槽 -->
            <template slot-scope="bottom">
                <span>{{bottom}}</span>
            </template>
            
        </Child>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import echarts from 'echarts'
import liquidfill from 'echarts-liquidfill'
import Child from './liquidFillChild'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        Child
    },
    data() {
        //这里存放数据
        return {
            nameList:[
            {id:1,name:'孙悟空'},
            {id:2,name:'猪八戒'},
            {id:3,name:'沙和尚'},
            {id:4,name:'唐僧'},
            {id:5,name:'小白龙'},
            ]
        }
    },
    //组件的方法集合
    methods: {
        liquidFill() {
            var liquid = this.$echarts.init(document.getElementById('liquidFill'))
            liquid.setOption({
                title: {
                    //标题
                    text: '水球图',
                    textStyle: {
                        //标题的样式
                        color: '#f60', //字体颜色
                        fontFamily: 'Microsoft YaHei', //字体
                        align: 'center', //文字的水平方式
                        verticalAlign: 'middle' //文字的垂直方式
                    },
                    left: 'center', //定位
                    backgroundColor: '#03dbdb' //文字区域的背景颜色
                },
                series: [
                    {
                        type: 'liquidFill', //类型
                        data: [0.7, 0.5, 0.4], //数据是个数组 数组的每一项的值是0-1
                        outline: {
                            //show: true , //是否显示轮廓 布尔值
                            borderDistance: 0, //外部轮廓与图表的距离 数字
                            itemStyle: {
                                //borderColor:'rgba(255,0,0,0.09)', //边框的颜色
                                borderWidth: 0 //边框的宽度
                                //shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                                //shadowColor: '#000' //外部轮廓的阴影颜色
                            }
                        },
                        backgroundStyle: {
                            color: 'rgba(255,0,0,0.1)', //图表的背景颜色
                            //borderWidth: '10',//图表的边框宽度
                            //borderColor: '#000',//图表的边框颜色
                            itemStyle: {
                                shadowBlur: 100, //设置无用
                                shadowColor: '#f60', //设置无用
                                opacity: 1 //设置无用
                            }
                        },
                        itemStyle: {
                            opacity: 0.5, //波浪的透明度
                            shadowBlur: 10, //波浪的阴影范围
                            shadowColor: '#f60' //阴影颜色
                        },
                        emphasis: {
                            itemStyle: {
                                opacity: 1 //鼠标经过波浪颜色的透明度
                            }
                        },
                        color: ['rgba(255,0,0,0.3)', 'rgba(255,0,0,0.3)', 'rgba(255,0,0,0.3)'], //水波的颜色 对应的是data里面值
                        shape: 'circle', //水填充图的形状 circle默认圆形  rect圆角矩形  triangle三角形  diamond菱形  pin水滴状 arrow箭头状  还可以是svg的path
                        center: ['50%', '50%'], //图表相对于盒子的位置 第一个是水平的位置 第二个是垂直的值 默认是[50%,50%]是在水平和垂直方向居中 可以设置百分比 也可以设置具体值
                        radius: '80%', //图表的大小 值是圆的直径 可以是百分比 也可以是具体值 100%则占满整个盒子 默认是40%; 百分比下是根据宽高最小的一个为参照依据
                        amplitude: 3, //振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
                        waveLength: '50%', //波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
                        phase: 0, //波的相位弧度 默认情况下是自动
                        period: (value, index) => {
                            //控制波的移动速度 可以是函数 也可以是数字 两个参数  value 是data数据里面的值 index 是data值的索引

                            return index * 2000
                        },
                        direction: 'left', //波移动的速度 两个参数  left 从右往左 right 从左往右
                        waveAnimation: true, //控制波动画的开关  值是布尔值 false 是关闭动画 true 是开启动画 也是默认值
                        animationEasing: 'linear', //初始动画
                        animationEasingUpdate: 'quarticInOut', //数据更新的动画效果
                        animationDuration: 3000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更绚丽的初始动画效果
                        animationDurationUpdate: 300 //数据更新动画的时长
                    }
                ]
                //backgroundColor: 'rgba(255,0,0,0.1)'容器背景颜色
            })
        }
    },
    //监控data中的数据变化：一个数据影响多个数据
    watch: {},
    //监听属性：一个数据受多个数据影响
    computed: {},
    beforeCreate: function() {
        // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
    },
    created: function() {
        // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，el 属性目前不可见。
    },
    beforeMount: function() {
        // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    },
    mounted: function() {
        // 编译好的HTML挂载到页面完成后执行的事件钩子
        // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
        // 此钩子函数中一般会做一些ajax请求获取数据进行数据初始化,可访问DOM元素
        console.log('Home done')
        this.liquidFill()
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
.liquidFillContainer {
    width: 800px;
    height: 800px;
    .liquidFillContent {
        width: 600px;
        height: 400px;
    }
}
</style>
