<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collaps ? 'menu-unfold' : 'menu-fold'"
      @click="setCollapsed()"
    />

    <a-dropdown class="headUser">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        {{ userName }}
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item key="1">
          <router-link to="/site">
            <a-icon type="user" /> 站点列表
          </router-link>
        </a-menu-item>

        <a-menu-item key="2">
          <a-icon type="setting" />账户设置
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3" @click="loginOut">退出</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-select
      v-if="selectShow"
      :loading="!selectShow"
      class="headSite"
      @change="siteChange"
      :value="selectDefault"
    >
      <a-select-option
        v-for="(Item,key) in sites"
        :key="key"
        :value="sites[key].site_id"
      >{{Item.domain}}</a-select-option>
    </a-select>
  </a-layout-header>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      sites: [],
      selectShow: false
    };
  },
  created() {
    //this.selectIndex.index = this.selectDefault;
    this.getSiteList();
  },
  computed: {
    ...mapState(["Username", "siteList", "site","Collapsed"]),
    //返回站点列表
    siteList() {
      //console.log(this.$store.state.site.siteList);
      return this.$store.state.site.siteList;
    },
    //返回默认站点
    selectDefault() {
      return Number(this.$store.state.site.defaultSiteId);
    },
    //获取用户信息
    userName() {
      return this.$store.state.user.Username;
    },
    //获取视图是否展开
    collaps() {
      return Boolean(this.$store.state.view.Collapsed);
    }
  },
  methods: {
    ...mapMutations(["loginOut","setCollapsed"]),
    ...mapActions(["getSiteList", "setSelectSite"]),
    //获取站点列表
    getSiteList() {
      //获取站点列表
      this.$store.dispatch("getSiteList").then(() => {
        this.sites = this.siteList;
        //设置默认站点
        //console.log(this.selectDefault);

        if (this.selectDefault == 0) {
          this.siteChange(this.sites[0].site_id);
        }
        this.selectShow = true;
      });
    },
    //退出
    loginOut() {
      this.$store.commit("loginOut");
      window.location = "/login";
    },
    //修改默认站点
    siteChange(val) {
      this.$store.commit("setSelectSite", val);
    },
    //设置菜单展开
    setCollapsed(){

      let collapsed=this.collaps 
      this.$store.commit("setCollapsed", collapsed = ! collapsed);
      
    }
    
  }
};
</script>
