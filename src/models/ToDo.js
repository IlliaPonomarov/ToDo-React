

export default class ToDo {
    constructor(id, title, description, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdDate = new Date();
        this.completedDate = null;
    }


    complete() {
        this.status = true;
        this.completedDate = new Date();
    }

    uncomplete() {
        this.status = false;
        this.completedDate = null;
    }
}