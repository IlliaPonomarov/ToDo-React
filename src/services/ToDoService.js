import DayTodo from "../models/DayToDo";
import ToDo from "../models/ToDo";


export default class ToDoService{

    //
    // dayTodoList = [
    //     new DayTodo(1, [ new ToDo(1, "Do the dishes", "Do the dishes", false), new ToDo(2, "Do the dishes", "Do the dishes", false), new ToDo(3, "Do the dishes", "Do the dishes", false)], new Date()),
    //     new DayTodo(2, [ new ToDo(4, "Do the dishes", "Do the dishes", false), new ToDo(5, "Do the dishes", "Do the dishes", false), new ToDo(6, "Do the dishes", "Do the dishes", false)], new Date()),
    //     new DayTodo(3, [ new ToDo(7, "Do the dishes", "Do the dishes", false), new ToDo(8, "Do the dishes", "Do the dishes", false), new ToDo(9, "Do the dishes", "Do the dishes", false)], new Date()),
    //     new DayTodo(4, [ new ToDo(10, "Do the dishes", "Do the dishes", false), new ToDo(11, "Do the dishes", "Do the dishes", false), new ToDo(12, "Do the dishes", "Do the dishes", false)], new Date()),
    //     new DayTodo(5, [ new ToDo(13, "Do the dishes", "Do the dishes", false), new ToDo(14, "Do the dishes", "Do the dishes", false), new ToDo(15, "Do the dishes", "Do the dishes", false)], new Date()),
    //     new DayTodo(6, [ new ToDo(16, "Do the dishes", "Do the dishes", false), new ToDo(17, "Do the dishes", "Do the dishes", false), new ToDo(18, "Do the dishes", "Do the dishes", false)], new Date()),
    // ];

    dayTodoList = [
        new DayTodo(1, [ new ToDo(1, "Do the dishes", "Do the dishes", false), new ToDo(2, "Do the dishes", "Do the dishes", false), new ToDo(3, "Do the dishes", "Do the dishes", false)], new Date()),
        new DayTodo(2, [ new ToDo(4, "Do the gym", "Do the gym", false), new ToDo(5, "Do the gym", "Do the gym", false), new ToDo(6, "Do the gym", "Do the gym", false)], new Date()),
        new DayTodo(3, [ new ToDo(7, "Do the homework", "Do the homework", false), new ToDo(8, "Do the homework", "Do the homework", false), new ToDo(9, "Do the homework", "Do the homework", false)], new Date()),
        new DayTodo(4, [ new ToDo(10, "Do the dishes", "Do the dishes", false), new ToDo(11, "Do the dishes", "Do the dishes", false), new ToDo(12, "Do the dishes", "Do the dishes", false)], new Date()),
    ];

    getDayTodoList() {
        return this.dayTodoList;
    }

    getDayTodoById(id){
        return this.dayTodoList.find(dayTodo => dayTodo.id === id);
    }

    getToDoById(id){
        return this.dayTodoList.find(dayTodo => dayTodo.id === id);
    }

    addToDoToDayTodoList(dayTodoId, toDo){
        this.getDayTodoById(dayTodoId).toDoList.push(toDo);
    }

    removeToDoFromDayTodoList(dayTodoId, toDoId){
        let dayTodo = this.getDayTodoById(dayTodoId);
        let toDo = dayTodo.toDoList.find(toDo => toDo.id === toDoId);
        dayTodo.toDoList.splice(dayTodo.toDoList.indexOf(toDo), 1);
    }



}