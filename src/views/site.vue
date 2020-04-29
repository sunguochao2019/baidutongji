<template>
  <div id="app">
    <Pageheader></Pageheader>
    <!---正文开始 -->
    <a-layout-content class="layoutContent">
      <a-table :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </a-layout-content>
    <!---正文结束 -->
  </div>
</template>

<script>
import Pageheader from "../components/pageHeader.vue";
import { mapState } from "vuex";
const columns = [
  {
    title: "站点名称",
    dataIndex: "domain",
    key: "domain",
    scopedSlots: { customRender: "domain" },
    id: 1
  },
  {
    title: "站点ID",
    dataIndex: "site_id",
    key: "site_id",
    id: 2
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
    key: "create_time 1",
    ellipsis: true,
    id: 3
  },
  {
    title: "站点状态",
    dataIndex: "status",
    key: "status 2",
    ellipsis: true,
    id: 4
  },
  {
    title: "操作",
    id: 5
  }
];

const data = [];

export default {
  name: "Index",
  components: {
    Pageheader
  },
  data() {
    return {
      data,
      columns
    };
  },
  created() {
    this.getSiteList();
  },
  methods: {
    ...mapState(["siteList", "site"]),

    getSiteList() {
      console.log(this.$store.state.site.siteList);
      this.data = this.$store.state.site.siteList;
      this.data.forEach((item, index) => {
        item.key = index + 1;
      });
    }
  }
};
</script>
