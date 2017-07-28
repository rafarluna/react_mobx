import { autorun, computed, observable } from 'mobx'
import Todo from '../models/Todo'

export default class TodoStore{
    @observable 
    todos = [];

    @observable 
    filter = '';

    @computed
    get filteredTodos(){
        var matchesFilter = new RegExp(this.filter, 'i');
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo));
    }

    createTodo = (value) => {
        this.todos.push(new Todo(value));
    }

    //??? por qué SIN el "= () => " no funciona, parece tener otro contexto, pero el método "createTodo" sí funciona ?
    clearComplete () {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos = incompleteTodos;
    }
 }

//var store = window.store = new TodoStore();
//console.log(store);

//export default store;

//autorun(() => {
//    console.log(store.filter);
//    console.log(store.todos[0]);
//})