
export class FilterStrategy{
    constructor() {
        this.filter = null;
    }
    set_filter (filter){
        this.filter = filter;
    }
    filter_task_list(task_list, filter_by){
        return this.filter.filter_task_list(task_list, filter_by);
    }
}