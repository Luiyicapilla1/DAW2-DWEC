import {ItemFactory} from './ItemFactory.js';
import {Task} from '../models/Task.js';
export class TaskCreator extends ItemFactory{
    constructor() {
        super();
        if (TaskCreator.instance){
            return TaskCreator.instance;
        }
        TaskCreator.instance = this;
    }
    createItem(title, description, priority, done) {
       return new Task(title, description, priority, done);
    }
}