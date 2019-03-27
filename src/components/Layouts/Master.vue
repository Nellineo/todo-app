<template>
    <div>
        <ul class=nav>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  .flex-center {
    display: flex;
    justify-content: center;
  }
  .nav {
    display: flex;
    list-style: none;
    padding: 25px 0;
    margin: 0;
    justify-content: flex-start;
    background: #ffffff;
    border-bottom: 1px solid rgb(149, 167, 202);
    margin-bottom: 24px;
  }
  .nav a {
    color: #2F4E6D;
    font-family:  'Avenir',Helvetica, Arial, sans-serif;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>
