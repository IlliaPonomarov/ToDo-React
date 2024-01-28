

export default class DayTodo{
    constructor(id, toDoList, date) {
        this.id = id;
        this.toDoList = toDoList;
        this.date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }




}