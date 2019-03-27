<template>
  <div class="todo-list">
      <div class="todo-input">
        <el-input type="text" 
        placeholder="Write Services and Component"
        v-model="newTodo" @keyup.enter.native="addTodo" class="todo-input_field"/>
        <el-button type="primary" @click="addTodo">Add</el-button>
      </div>
    
    <div v-if="$store.state.loading" class="lds-ring">
        <div></div><div></div><div></div><div></div>
    </div>
    <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <TodoItem v-for="(todo, index) in todosFiltered" 
    :key="todo.id" :todo="todo" :index="index" :checkAll="!anyRemaining">            
    </TodoItem>
    </transition-group>
    <div class="check-container">
        <TodoRemaining />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import TodoRemaining from './TodoRemaining'
import { Checkbox, Button } from 'element-ui'

export default {
  name: 'TodoList',
  components: {
      TodoItem,
      TodoRemaining,
  },
  data () {
    return {
      newTodo: '' 
    }
  },

  created() {
      this.$store.dispatch('retrieveTodos')
  },

  computed: {
      anyRemaining() {
          return this.$store.getters.anyRemaining
      },
     filter() {
            return this.$store.state.filter
        },

      todosFiltered() {
          return this.$store.getters.todosFiltered
      },
      
  },

  methods: {

      addTodo() {

          if(this.newTodo.trim().length == 0) {
              return
          }

          this.$store.dispatch('addTodo', {
              
              title: this.newTodo,
          })

          this.newTodo = ''
          
      },
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");


    .todo-list {
        background-color: #ffffff;
        border: 1px solid rgb(149, 167, 202);
        border-radius: 4px;
        
    }

    .todo-input {
        display: flex;
        padding: 20px;

        .el-input {
            max-width: 90%;
        }

        .el-button {
           margin-left: auto;
        }
    }

    .todo-input_field {
        
    }

    

    .todo-item {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        animation-duration: .4s;
        border-top: 1px solid rgb(149, 167, 202);
    }

    .remove-item {
        cursor: pointer;
        margin-left: 14px;
        &:hover {
            color:red;
        }
    }

    .todo-item-left {
        display: flex;
        align-items: center;
    }

    .todo-item-label {
        padding: 5px;
        font-size: 16px;
        color:#2c3e50;    
    }

    .todo-item-edit {
        font-size: 18px;
        color: #2c3e50;
        margin-left: 14px;
        width: 100%;
        padding: 10px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;

        &:focus {
            outline: none;
            border: none;
        }
    }

    

    .completed {
        transition: all 0.3s linear;
        background-color: #D9ECFF;
        color: #2c3e50;
    }

    .check-container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        padding: 15px 20px;
        border-top: 1px solid rgb(149, 167, 202);
        
    }

    

    // Css transition
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }

    .fade-enter, fade-leave-to {
        opacity:0;
    }

    // Spinner
    .lds-ring {
        display: block;
        position: relative;
        width: 64px;
        height: 64px;
        margin: auto;
        margin-bottom: 10px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 6px solid #8CC5FF;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #8CC5FF transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>
