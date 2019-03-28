import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        loading: true,
        filter: 'all',
        todos: [

        ]
    },

    getters: {
        remaining(state) {
            return state.todos.filter(todo => !todo.completed).length;
        },
        anyRemaining(state, getters) {
            return getters.remaining != 0;
        },
        todosFiltered(state) {
            if(state.filter == 'all') return state.todos
        },
    },
    
    mutations: {
        retrieveTodos(state, todos) {
            state.todos = todos
        },
        addTodo(state, todo) {
            state.todos.push({
                id: todo.id,
                title: todo.title,
                completed: false,
                editing: false
            })
        },

        deleteTodo(state, id) {
                const index = state.todos.findIndex(item => item.id == id);
                state.todos.splice(index, 1);
        },

        updateTodo(state,todo) {
                const index = state.todos.findIndex(item => item.id == todo.id);
                state.todos.splice(index, 1, {
                    'id': todo.id,
                    'title': todo.title,
                    'completed': todo.completed,
                    'editing': todo.editing
                })
        },
    },

    actions: {
        //Call to db
        retrieveTodos(context) {
            context.state.loading = true
            db.collection('todos').get()
            .then(querySnapshot => {
                let tempTodos = []
                querySnapshot.forEach(doc => {
                    const data = {
                        id: doc.id,
                        title: doc.data().title,
                        completed: doc.data().completed,
                        timestamp:doc.data().timestamp,
                    }
                    tempTodos.push(data)
                })
                context.state.loading = false
                const tempTodosSorted = tempTodos.sort((a, b) => {
                    return a.timestamp.seconds - b.timestamp.seconds
                })

                context.commit('retrieveTodos', tempTodosSorted)
            })
                       
        },

        addTodo(context, todo) {
            db.collection('todos').add({
                title: todo.title,
                completed: false,
                timestamp: new Date()
            })
            .then(docRef => {
                context.commit('addTodo', {
                    id: docRef.id,
                    title: todo.title,
                    completed: false
                }) 
            })
        },
 
        deleteTodo(context, id) {
            db.collection('todos').doc(id).delete()
                .then(() => {
                    context.commit('deleteTodo', id)
                })
        },
 
        updateTodo(context, todo) {
            db.collection('todos').doc(todo.id).set({
                id: todo.id,
                title: todo.title,
                timestamp: new Date()
            })
            .then(() => {
                context.commit('updateTodo', todo)
            })
        },
        
    }
})
