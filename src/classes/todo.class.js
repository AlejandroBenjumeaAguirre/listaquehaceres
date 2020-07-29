

export class Todo {

    static fromJson({ id, tarea, completado, fechacreado }){

        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.fechacreado = fechacreado;

        return tempTodo;
    }

    constructor( tarea ){
        
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.fechacreado = new Date();

    }
}