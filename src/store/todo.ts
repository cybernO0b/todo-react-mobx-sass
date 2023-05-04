import { action, makeAutoObservable } from "mobx";


class Todo {
    todos = [
        
        {id:2, title: "qwfawdfawdfwa", completed: false},
        {id:3, title: "sdfsdgassdgsd", completed: false}
    ]

    constructor(){
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }


    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        console.log('remove')
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        console.log('complied')
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.todos = [...this.todos, ...json])
    }
}

export default new Todo();