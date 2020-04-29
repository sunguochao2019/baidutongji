<template>
  <div id="app">
    <Pageheader></Pageheader>
    <!---正文开始 -->
    <a-layout-content class="layoutContent">
      <ve-line :data="chartData"></ve-line>

      <a-table :dataSource="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </a-layout-content>
    <!---正文结束 -->
  </div>
</template>

<script>
import Pageheader from "../components/pageHeader.vue";
import VeLine from "v-charts/lib/line.common";
import { mapState, mapMutations, mapActions } from "vuex";

const tableColumns = [
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

export default {
  name: "Index",
  components: {
    Pageheader: Pageheader,
    "ve-line": VeLine
  },
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      },
      data: [],
      tableColumns
    };
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapState(["getData"]),
    ...mapMutations(["getData"]),
    ...mapActions(["getData"]),
    getData() {
      let fields = {
        site_id: "10605067",
        start_date: "2020/04/20",
        end_date: "2020/04/27",
        metrics: "pv_count",
        method: "overview/getTimeTrendRpt"
      };


      //获取站点列表
      this.$store.dispatch("getData", fields).then(() => {
        let getData = this.$store.state.site.getData;

        let columns = getData.fields;
        let rows = [];

        for (var i = 0; i < getData.items[0].length; i++) {
          let obj = {};
          for (var m = 0; m < columns.length; m++) {
            let tmp = columns[m];
            obj[tmp] = getData.items[m][i] + "";
            //temp.push(rowsObj[columns[m]]);
          }
          rows.push(obj);
        }
        //console.log(rows);

        this.chartData.columns = columns;
        this.chartData.rows = rows;
      });
    }
  }
};
</script>
