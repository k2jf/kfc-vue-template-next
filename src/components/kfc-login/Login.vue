<template>
  <div class="container">
    <div class="prompt">
      <h1 style="margin: 20px 0; color: #333333">
        KFC-Login
      </h1>
      <i-form
        :model="formInline"
        :rules="ruleInline"
        inline
        id="login"
        ref="formInline"
      >
        <i-form-item prop="username">
          <i-input
            type="text"
            style="width: 300px"
            placeholder="请输入用户名"
            v-model="formInline.username"
          >
            <i-icon type="ios-person-outline" slot="prepend"></i-icon>
          </i-input>
        </i-form-item>
        <br>
        <i-form-item prop="password">
          <i-input
            type="password"
            style="width: 300px"
            placeholder="请输入密码"
            v-model="formInline.password"
            @on-enter="handleSubmit('formInline')"
          >
            <i-icon type="ios-lock-outline" slot="prepend"></i-icon>
          </i-input>
        </i-form-item>
        <br>
        <i-form-item>
          <i-button type="primary" @click="handleSubmit('formInline')">
            登录
          </i-button>
        </i-form-item>
        <i-form-item>
          <i-button type="primary" @click="handleCancle()">
            取消
          </i-button>
        </i-form-item>
      </i-form>
    </div>
    <div class="copy-right">
      2019 © K2DATA × KFC
    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Icon, Button } from 'iview'

export default {
  name: 'Login',
  components: {
    'i-form': Form,
    'i-form-item': FormItem,
    'i-input': Input,
    'i-icon': Icon,
    'i-button': Button
  },
  data () {
    return {
      formInline: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let param =
            {
              username: this.formInline.username,
              password: this.formInline.password
            }
          this.$axios.post('/kmx_login', param).then(res => {
            this.$router.push('/')
          })
        } else {
          this.$Message.error('请输入正确的用户名或密码')
        }
      })
    },
    handleCancle () {
      this.formInline.username = ''
      this.formInline.password = ''
    }
  }
}
</script>

<style scoped>
  .prompt {
    width: 44em;
    height: 20em;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -22em;
    margin-top: -10em;
    /*outline: 2px solid red;*/
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }

  .container {
    width: 100vw;
    height: 100vh;
    background: no-repeat center / cover url("login-bg.jpg");
  }

  .copy-right {
    color: #FEFEFE;
    font-size: 16px;
    position: absolute;
    left: 20px;
    bottom: 20px;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
  }
</style>
