import './style.css';

import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componente';


export const todoList = new TodoList();
 
todoList.todos.forEach( crearTodoHtml );


/* localStorage.setItem('mi-key', 'alejandro');
sessionStorage.setItem('mi-key', 'alejandro'); */




