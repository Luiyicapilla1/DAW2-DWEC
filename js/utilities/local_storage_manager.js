"use strict";
export function add_task_local_storage(task_list){
    localStorage.setItem('tasks', JSON.stringify(task_list));
}

export function get_task_local_storage(){
    return JSON.parse(localStorage.getItem('tasks'));
}