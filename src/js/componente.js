import { Todo } from "../classes";
import { todoList } from "../index";
 
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro')

export const crearTodoHtml = ( todo ) => {


    const todoHtml = `
        <li class="${ ( todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ ( todo.completado ) ? 'checked' : ''}>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `

    const div = document.createElement('div');
    div.innerHTML = todoHtml;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

// Eventos

txtInput.addEventListener('keyup', ( event ) => {

    if( event.keyCode === 13 && txtInput.value.length > 0 ){

        const todo = new Todo(txtInput.value);
        todoList.nuevoTodo(todo);
        console.log(todoList);
        crearTodoHtml(todo);
        txtInput.value = '';
    }
    

});

divTodoList.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName;  // Input(check), label(el nombre), button(la X para eliminar)
    const todoElement    = event.target.parentElement.parentElement;
    const todoId         = todoElement.getAttribute('data-id'); 

    if( nombreElemento.includes('input')){ // Click en el check para marcarlo como realizado

        todoList.marcarCompletado(todoId);
        todoElement.classList.toggle('completed');
        
    } else if( nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElement);
    }
    console.log(todoList);
});

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length - 1; i >= 0; i-- ){

      const elemento = divTodoList.children[i];

         if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }

});

ulFiltros.addEventListener('click', ( event ) => { 

    const filtro = event.target.text;

    if(!filtro) return;

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        console.log(filtro);

        switch(filtro){
            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if (!completado){
                    elemento.classList.add('hidden');
                }
            break;
        }

    }

});