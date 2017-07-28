import React from "react";
import Provider from "mobx-react";
import ReactDOM from "react-dom";

import TodoList from './TodoList';
import TodoStore from "./stores/TodoStore";

const initalState = () => ({
    todoStore: new TodoStore()
})

ReactDOM.render(
    <Provider {...initalState}>
        <TodoList />
    </Provider>, 
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept()
}