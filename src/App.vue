<template>
  <div id="app">
    <!-- <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container> -->
    <router-view></router-view>


  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  }
};
</script>

<style>
html,body,#app{
  height: 100%;
  margin:0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  position: absolute;
  margin-top: 0;
  margin-bottom: 0;
  box-sizing: border-box;
  width: 100%;
}
/* .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
  }
  
  /* .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    height: 100%;
  }  */
  
  /* body > .el-container {
    margin-bottom: 40px;
  } */
</style>
