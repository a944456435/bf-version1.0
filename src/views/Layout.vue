<template>
  <div id="home">
    <div class="container">
      <div :class="isCollapse==false?'left-nav':['left-nav','left-nav--collapse']">
        <div :class="isCollapse==false?['left-nav__title']:['left-nav__title--collapse']"> 
          <i :class="isCollapse==false?['el-icon-upload', 'left-nav__logo']:['el-icon-upload','left-nav__logo--collapse']"></i> 服务平台</div>
        <div id="nav" >
          <el-menu 
            :collapse="isCollapse"
            background-color="#fff"
            text-color="#218868"
            active-text-color="teal"
            :collapse-transition="false"
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
      <div :class="isCollapse==false?'right-content':['right-content','right-content--collapse']">
        <div :class="isCollapse==false?'right-header':['right-header','right-header--collapse']">
          <el-row type="flex" justify="start">
            <el-col :span="1">
              <i class="el-icon-s-fold" @click="canCollapse"></i>
            </el-col>
            <el-col :span="18">
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
            <el-col :offset="1" :span="1">
                <el-dropdown  @command="handleCommand">
                  <el-badge :value="3" class="bage--news">
                    <span class="el-dropdown-link">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </span>
                  </el-badge>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus" command="update">修改信息</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check" command="logout">退出登陆</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </el-col>
          </el-row>
        </div>
        <div :class="isCollapse==false?'content':['content','content--collapse']">
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
  width: 100%;
  /* 去除水平滚动条 */
  overflow: auto;
  box-sizing: border-box;
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
.container > .left-nav--collapse {
  width: 64px; 
}
.left-nav__title {
  line-height: 2.5em;
  font-size: 18px;
  text-align: left;
  color: #333;
  font-weight: bold;
}
.left-nav__title--collapse {
  font-size: 10px;
  text-align: left;
  color: #333;
}
.el-menu-item.is-active {
  background-color: #FCFCFC !important;
  border:1px solid teal;
}
.left-nav__logo {
  color: teal;
  font-size: 22px;
}
.left-nav__logo--collapse {
  color: teal;
  font-size: 12px;
}
#nav {
  margin-right: -1px;
}
.container > .right-content {
  /* flex:1; */
  background-color: #f1f2f7;
  height: 100%;
  margin-left:201px;
  width: 100%;
}
.container > .right-content--collapse {
  margin-left:65px;
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
.container > .right-content > .right-header--collapse {
  left:65px;
}
.bage--news {
  margin-top: 6px;
  margin-right: 40px;
}
.container  .el-select {
  width: 100px;
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
.content--collapse {
  left:65px;
}
</style>