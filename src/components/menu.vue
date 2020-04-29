<template>
  <a-layout-sider style="background: #fff" :trigger="null" collapsible v-model="collaps">
    <div class="logo" />

    <a-menu mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>
          <a href="/index">站点列表</a>
        </span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>
          <a href="/TrendRpt">趋势数据</a>
        </span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      
    };
  },
  created(){
    //this.collapsed=this.collaps
  }
  ,
  computed: {
    ...mapState(["Collapsed"]),
    //获取视图是否展开
    collaps() {
      console.log(this.$store.state.view.Collapsed)
      return Boolean(this.$store.state.view.Collapsed) ;
    }
  },
  methods: {}
};
</script>
<style></style>
