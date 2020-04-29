<template>
  <div id="auth"></div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      response_type: "code",
      display: "popup",
      client_id: "kGGd4uhlWtYiQfQMPTeWfViZ", //您的用户名
      redirect_uri: "http://www.sosoago.com/token" //回调地址
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    getCode() {
      window.location = `http://openapi.baidu.com/oauth/2.0/authorize?
      response_type=${this.response_type}&
          client_id=${this.client_id}&
          redirect_uri=${this.redirect_uri}
          `;
      // this.Axios.get("http://localhost:8080/authorize", {
      //   params: {
      //     response_type: this.response_type,
      //     client_id: this.client_id,
      //     redirect_uri: this.redirect_uri,
      //   },
      // })
    }
  }
};
</script>
