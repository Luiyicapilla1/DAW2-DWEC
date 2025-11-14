
export class PriorityFilter{
    filter_task_list(task_list, filter_by){
        let filtered_task_list = [];

        if (filter_by === 'low'){
            for (const task of task_list) {
                if (task.priority === 'low'){
                    filtered_task_list.push(task);
                }
            }
        }else if(filter_by === 'normal'){
            for (const task of task_list) {
                if (task.priority === 'normal'){
                    filtered_task_list.push(task);
                }
            }
        }else if(filter_by === 'high'){
            for (const task of task_list) {
                if (task.priority === 'high'){
                    filtered_task_list.push(task);
                }
            }
        }
        return filtered_task_list;
    }
}