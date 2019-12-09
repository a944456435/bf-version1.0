<template>
    <div id="home">
        <!-- <el-menu default-active="/home/processing" 
            class="el-menu-demo" mode="horizontal"  :router="true">
            <el-menu-item index="/home/processing">处理中心</el-menu-item>
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
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu> -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        </el-tabs>
        <router-view/>        
    </div>
</template>
<script>
export default {
    data(){
        return {
            // activeIndex:"/processing"
            activeName:"first"
        }
    },
    methods:{
        // handleSelect(key, keyPath){
        //     window.console.log("key:",key, "keyPath:",keyPath[0]);
        //     this.$router.push({path: keyPath[0]})
        // }
        handleClick(tab,event){
            window.console.log(tab,event)
            //在vue-router的js文件中解决同一路由跳转
            this.$router.push({path:"/home/"+tab.paneName})
        }
    }
}
</script>
<style scoped>
.el-menu-item.is-active {
  background-color: #FCFCFC !important;
}
</style>