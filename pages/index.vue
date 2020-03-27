<template>
  <div>
    <section class="container">
      <div>
        <logo />
        <h1 class="title">event-platform</h1>
        <h2 class="subtitle">My badass Nuxt.js project</h2>
        <div>测试</div>
        <nuxt-link to="/test">去测试页</nuxt-link>
        <el-form 
          ref="rigister" :rules="rules" :model="form" 
          label-width="80px">
          <el-form-item required label="用户名" prop="name">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="密码" required prop="passwd">
            <el-input v-model="form.passwd"/>
          </el-form-item>
          <el-button @click="handleClickRigister">注册</el-button>
        </el-form>
        <el-button @click="handleClickLogin">登录</el-button>
      </div>
     
    </section>
    <footer class="beian">
      <div class="copyright">
        © 2020 ltx 版权所有.
        <a href="http://www.beian.miit.gov.cn" rel="nofollow">粤ICP备20008684号</a><i/>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { login, getUserInfo, registerApi } from '../api/user'

export default {
  components: {
    Logo
  },
  data() {
    return {
      form: {},
      rules: {}
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      getUserInfo().then(data => {
        console.log(data)
      })
    },
    handleClickLogin() {
      const params = {
        name: 'luotuxiu',
        passwd: 'xxx'
      }
      login(params).then(data => {
        console.log(data)
        localStorage.setItem('token', data.token)
      })
    },
    handleClickRigister() {
      this.$refs['rigister'].validate(valid => {
        console.log(valid)
        if (valid) {
          registerApi(this.form)
            .then(data => {
              console.log('注册成功')
              localStorage.setItem('token', data.token)
            })
            .catch(error => {
              this.$message(error)
            })
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.copyright {
  text-align: center;
}
</style>
