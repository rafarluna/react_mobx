import React from 'react';
import { observer, inject } from 'mobx-react';

// Sin este decorator [observer] , funcionaría y renderizaría bien, pero al momento de cambiar algo del store 
//( propiedad que se manda como parámetro) no se vería el cambio reflejado
@inject("todoStore") @observer 
export default class TodoList extends React.Component{
    componentWillMount () {
        const { createTodo, filter, clearComplete, filteredTodos, todos  } = this.props.TodoStore
    }

    createNew(e){
        if (e.which === 13){
            createTodo(e.target.value);
            e.target.value = '';
        }
    }

    filter(e){
        filter = e.target.value;
    }

    toggleComplete(todo){
        todo.complete = !todo.complete;
    }

    //??? Cuál es la diferencia de declarar cosas dentro de render y ponerlas en un constructor ?
    render(){
        
        const todoList = filteredTodos.map((todo, index) => (
            <li key={todo.id}> 
                <input type="checkbox" 
                onChange={this.toggleComplete.bind(this, todo)}
                checked={todo.complete} />
                {todo.value} 
            </li>
        ))        

        //??? Qué hace el bind(this) ?
        return (
            <div>
                <h1>ToDos</h1> 
                <div>{filter}</div>
                <div><input type="text" className='filter' onKeyPress={this.createNew.bind(this)}/></div>
                <div><input type="text" className='filter' value={filter} onChange={this.filter.bind(this)}/></div>
                <ul>{todoList}</ul>
                <a href="#" onClick={clearComplete.bind(this)}>Clear complete</a>
            </div>
        )
    }
}