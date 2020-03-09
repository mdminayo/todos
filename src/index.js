

import './styles.css'

/* import { Todo } from './classes/todo.class.js';
import { TodoList } from './classes/todo-list.class'; */

import  { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript !!!');
// todoList.nuevoTodo( tarea );

// tarea.completado = true;

// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('my-key', 'ABC123');
// sessionStorage.setItem('my-key', 'ABC123');

// para borrar el local storage

// setTimeout(() =>{

//     localStorage.removeItem('my-key');
// }, 1500);


// todoList.todos.forEach(todo => crearTodoHtml( todo )); // tiene el mismo argumento, entonces todoList.todos.forEach( crearTodoHtml ); 

todoList.todos.forEach( crearTodoHtml ); 


