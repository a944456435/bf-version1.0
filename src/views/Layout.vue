<template>
  <div id="home">
    <div class="container">
      <div class="left-nav">
        <div class="title"> <i class="el-icon-upload logo"></i> 服务平台</div>
        <div id="nav" >
          <el-menu 
            :collapse="isCollapse"
            background-color="#fff"
            text-color="#218868"
            active-text-color="teal"
            :router="true"
            default-active="/home" class="el-menu-vertical-demo" >
            <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页大屏</span>
            </el-menu-item>
            <el-menu-item index="/category">
              <i class="el-icon-s-order"></i>
              <span slot="title">栏目管理</span>
            </el-menu-item>
            <el-menu-item index="/product">
              <i class="el-icon-s-shop"></i>
              <span slot="title">产品管理</span>
            </el-menu-item>
            <el-menu-item index="/customer">
              <i class="el-icon-s-custom"></i>
              <span slot="title">顾客管理</span>
            </el-menu-item>
            <el-menu-item index="/review">
              <i class="el-icon-message-solid"></i>
              <span slot="title">审核大厅</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="right-content">
        <div class="right-header">
          <el-row>
            <el-col :span="2">
              <i class="el-icon-s-fold" @click="canCollapse"></i>
            </el-col>
            <el-col :span="15">
              <div>
              <el-input placeholder="请输入内容"  class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="餐厅名" value="1"></el-option>
                  <el-option label="订单号" value="2"></el-option>
                  <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            </el-col>
            <el-col :offset="2" :span="1">
                <el-dropdown  @command="handleCommand">
                  <span class="el-dropdown-link">
                      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus" command="update">修改信息</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check" command="logout">退出登陆</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </el-col>
          </el-row>
        </div>
        <div class="content">
            <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isCollapse:false,
      select:''
    }
  },
  methods:{
    logoutHandler(){
      this.$router.push("/login")
    },
    canCollapse(){
      this.isCollapse == false ? this.isCollapse = true :this.isCollapse = false;
    },
    handleCommand(command) {
        this.$message('click on item ' + command);
      }
  }
}
</script>
<style scoped>
#home {
  height: 100%;
}
.container {
  height: 100%;
  /* display: flex; */
}
.left-nav {
  width: 200px; 
  background-color: white;
  text-align: center;
  border-right: 1px solid teal;
  position: fixed;
  height: 100%;
  overflow-x: hidden;
}
.container > .left-nav .title {
  line-height: 2.5em;
  font-size: 18px;
  text-align: left;
  color: #333;
  font-weight: bold;
}
.el-menu-item.is-active {
  background-color: #FCFCFC !important;
  border:1px solid teal;
}
.logo {
  color: teal;
  font-size: 22px;
}
#nav {
  margin-right: -1px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.container > .right-content {
  /* flex:1; */
  background-color: #f1f2f7;
  height: 100%;
}
.container > .right-content > .right-header {
  padding: 0 1em;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #ededed;
  position: fixed;
  width: 100%;
  left:201px;
}
.content {
  background-color: #ffffff;
  border-radius: 3px;
  padding: .5em;
  overflow-y: scroll;
  position: fixed;
  top:45px;
  left:201px;
  right: 0;
  bottom: 0;
}
</style>