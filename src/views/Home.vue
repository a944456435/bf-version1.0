<template>
  <div id="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab) {
      // window.console.log(tab,event)
      //子组件向父组件传值
      //   this.$emit.
      //在vue-router的js文件中解决同一路由跳转
      this.$router.push({ path: tab.paneName });
    }
  }
};
</script>
<style scoped>
.el-menu-item.is-active {
  background-color: #fcfcfc !important;
}
</style>