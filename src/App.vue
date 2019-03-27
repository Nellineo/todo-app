<template>
  <div id="app" class="container">
    
    <el-button type="info" icon="el-icon-info" circle class="floating-button" @click="open"></el-button>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList'


export default {
  name: 'App',
  components: {
    TodoList
  },

  methods: {
    open() {
      this.$notify({
        title: 'Info',
        message: 'You can double-click on a todo to edit the value!',
        offset: 100
      })
    }
  }
}
</script>

<style>


* {
  box-sizing: border-box;
}

body {
  background-color:#E9EBEE;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}

.floating-button {
  position: absolute;
  z-index: 999;
  top:90%;
  left: 90%;
  background:#409EFF;
  border-color: #66B1FF;
  transition: all 0.5s;
}

.floating-button:hover {
  background-color:#2c3e50;
}

.el-notification {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
