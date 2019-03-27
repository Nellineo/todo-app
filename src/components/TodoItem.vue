<template>
    <div class="todo-item" :class="{ completed : completed }">
        <div class="todo-item-left">
            <el-checkbox v-model="completed" @change="doneEdit"></el-checkbox>
            <div v-if="!editing" @dblclick="editTodo"
            class="todo-item-label" >{{ title }}</div>
            <input v-else class="todo-item-edit" type="text"
            v-model="title" @blur="doneEdit" 
            @keyup.enter="doneEdit" @keyup.escape="cancelEdit" 
            v-focus>
        </div>
        <div class="remove-item" @click="removeTodo(todo.id)">
            &times;
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            'id': this.todo.id,
            'title': this.todo.title,
            'completed': this.todo.completed,
            'editing': this.todo.editing,
            'beforeEditCache': '',
        }
    },

    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
            el.focus()
            }
        }
    },
    methods: {
        removeTodo(id) {
            this.$store.dispatch('deleteTodo', id)
        },

        editTodo() {
            this.beforeEditCache = this.title
            this.editing = true
        },

        doneEdit() {
            if(this.title.trim() == '') {
                this.title = this.beforeEditCache
            }
            this.editing = false
            this.$store.dispatch('updateTodo', {
                'id': this.id,
                'title': this.title,
                'completed': this.completed,
                'editing': this.editing, 
            })
        },

        cancelEdit() {
            this.title = this.beforeEditCache
            this.editing = false
        },

    }
}
</script>

<style>

</style>
