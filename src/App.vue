<template>
  <div id="app">
    <a-layout
      id="components-layout-demo-side"
      style="min-height: 100vh"
      v-if="islogin"
    >
      <!---菜单 -->
      <Menu></Menu>
      <a-layout>
        <!---头部 -->
        <Header></Header>
        <router-view></router-view>
      </a-layout>
    </a-layout>

    <Login v-else></Login>
    <!-- <component v-bind:is="currentBizComponent"></component> -->
  </div>
</template>

<script>
import Login from "./views/login.vue";
import Header from "./components/header.vue";
import Menu from "./components/menu.vue";

export default {
  name: "App",
  components: {
    Login,
    Header,
    Menu,
  },
  data() {
    return {
      islogin: this.$route.name !== "login",
    };
  },

  created() {},
  computed: {
    // // 当前应该加载的组件
    currentBizComponent() {
      return this.condition;
    },
  },
  methods: {},
};
</script>
<style src="@/assets/css/index.css" />
