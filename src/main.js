import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import MyPie from "@/components/pie.vue";

// 引入echarts
import myCharts from "echarts";

Vue.use(myCharts);

Vue.config.productionTip = false;
//全局注册组件
Vue.component("my-pie", MyPie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
