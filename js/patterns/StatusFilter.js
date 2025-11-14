
export class StatusFilter{
    filter_task_list(task_list, filter_by){
        let filtered_task_list = [];

        if (filter_by === 'false'){
            for (const task of task_list) {
                if (task.done === 'false'){
                    filtered_task_list.push(task);
                }
            }
        }else if(filter_by === 'true'){
            for (const task of task_list) {
                if (task.done === 'true'){
                    filtered_task_list.push(task);
                }
            }
        }
        return filtered_task_list;
    }
}