
export class FilterStrategy{
    constructor() {
        this.filter = null;
    }
    filter_task_list(task_list, filter_by){
        return this.filter.filter_task_list(task_list, filter_by);
    }
}