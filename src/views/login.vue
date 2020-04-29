<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header style="background: #fff">
      <div class="logo" />
    </a-layout-header>
    <a-layout-content class="loginContent">
      <a-row>
        <a-col :span="14"></a-col>
        <a-col :span="8">
          <a-form id="loginForm" :form="form" class="login-form" @submit="checkLogin">
            <a-form-item>
              <a-input
                v-decorator="[
                    'userName',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ],
                    },
                  ]"
                placeholder="请输入百度商业账号"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                    'password',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Password!',
                        },
                      ],
                    },
                  ]"
                type="password"
                placeholder="密码"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                    'token',
                    {
                      rules: [
                        {
                          required: false,
                          message: 'Please input your Token!',
                        },
                      ],
                    },
                  ]"
                placeholder="请输入token"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: Remember,
                    },
                  ]"
              >Remember me</a-checkbox>
         
              <a-button type="primary" html-type="submit" class="login-form-button">登 录</a-button>Or
              <a href>register now!</a>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer style="text-align: center">YeePay Design ©2018 Created by YeePay UED</a-layout-footer>
  </a-layout>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

//import qs from "qs";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "loginForm" });
  },

  data() {
    return {
      Remember: true
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["checkSite"]),
    ...mapActions(["checkLogin"]),

    checkLogin(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let user = {
            username: values.userName,
            password: values.password,
            token: "11c6f13e97eb44634856f02329ddb33a"
          };
          this.$store.dispatch("checkLogin", user).then(() => {
            window.location = "/index";
            //this.$router.push({ path: "/index" });
          });
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style>
.loginContent {
  padding: 50px 0;
}

#loginForm.login-form {
  max-width: 400px;
  float: right;
  background: #fff;
  padding: 40px;
}
#loginForm .login-form-forgot {
  float: right;
}
#loginForm .login-form-button {
  width: 100%;
}
</style>
