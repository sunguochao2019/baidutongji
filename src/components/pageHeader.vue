<template>
  <a-page-header
    class="pageHeader"
    title="站点列表"
    :breadcrumb="{ props: { routes } }"
    subTitle=""
  />
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          path: "index",
          breadcrumbName: "首页",
        },
        {
          path: "first",
          breadcrumbName: "列表",
        },
        {
          path: "second",
          breadcrumbName: "详情",
        },
      ],
    };
  },
};
</script>
<style scoped>
.pageHeader {
  border: 1px solid rgb(235, 237, 240);
  background: #fff;
}
</style>
