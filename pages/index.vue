<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">event-platform</h1>
      <h2 class="subtitle">My badass Nuxt.js project</h2>
      <div>测试</div>
      <nuxt-link to="/test">去测试页</nuxt-link>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <button @click="handleClickLogin">登录</button>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
const axios = require('axios')

export default {
  components: {
    Logo
  },
  methods: {
    handleClickLogin() {
      axios.get('http://119.27.191.205/api//user/login').then(data => {
        console.log(data)
      })
    }
  }
}
</script>

<style>
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
</style>
