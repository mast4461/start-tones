<template>
  <div id="app">
    <navbar></navbar>
    <router-view transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { songsRef } from './theFirebase'

export default {
  components: {
    Navbar
  },
  firebase: {
    songs: songsRef
  }
}

</script>
<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
