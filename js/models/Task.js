
export class Task{
    constructor(title, description, priority, done) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.done = done;
        this.createdAt = new Date();
    }
}