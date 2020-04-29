<template>
  <div id="token">
    <input @click="getToken" type="button" value="授权" />
    {{code}}
  </div>
</template>

<script>
export default {
  name: "token",
  data() {
    return {
      code: this.$route.query.code
    };
  },
  created() {
    this.getToken();
    console.log(this.$route.query.code);
  },
  methods: {
    getToken() {
      window.location = `http://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&client_id=kGGd4uhlWtYiQfQMPTeWfViZ&
      code=${this.code}&client_secret=n18k5MrL5pzo5js3RySYcdeTRLDi8G1i&redirect_uri=http://www.sosoago.com/token`;
    }

    // getToken() {
    //   this.Axios.get("https://openapi.baidu.com/oauth/2.0/token", {
    //     params: {
    //       grant_type: "authorization_code",
    //       code: this.code,
    //       client_id: "kGGd4uhlWtYiQfQMPTeWfViZ", //您的用户名
    //       client_secret: "n18k5MrL5pzo5js3RySYcdeTRLDi8G1i",
    //       redirect_uri: "http://www.sosoago.com/token" //回调地址
    //     }
    //   })
    //     .then(res => {
    //       alert(res.data);
    //     })
    //     .catch(() => {
    //       //console.log(e);
    //     });
    // }
  }
};
</script>
