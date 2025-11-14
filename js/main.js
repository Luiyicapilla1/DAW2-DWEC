"use strict";
import {TaskCreator} from './patterns/TaskCreator.js';
import {DomFacade} from './ui/DomFacade.js';
import {add_task_local_storage, get_task_local_storage} from './utilities/local_storage_manager.js'
import {FilterStrategy} from "./patterns/FilterStrategy.js";
import {StatusFilter} from "./patterns/StatusFilter.js";
import {PriorityFilter} from "./patterns/PriorityFilter.js";

const submit_button = document.getElementById('submit_button');
const button_filter_status = document.getElementById('button_filter_status');
const button_filter_priority = document.getElementById('button_filter_priority');

let task_list = get_task_local_storage() || [];

submit_button.addEventListener('click', (e)=>{
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const prioridad = document.getElementById('prioridad').value;
    const completada = document.getElementById('completada').value;

    const taskCreator = new TaskCreator();
    let task = taskCreator.createItem(titulo, descripcion, prioridad, completada);
    task_list.push(task);

    add_task_local_storage(task_list);
});
document.addEventListener('DOMContentLoaded', (e)=>{
    const domFacade = new DomFacade();
    domFacade.renderTasks(task_list);
});

button_filter_status.addEventListener('click', (e)=>{
    e.preventDefault();
    const filter_status = document.getElementById('filter_status').value;
    const domFacade = new DomFacade();
    const filter_strategy = new FilterStrategy();
    filter_strategy.filter = new StatusFilter();
    domFacade.renderTasks(filter_strategy.filter_task_list(task_list, filter_status));
});
button_filter_priority.addEventListener('click', (e)=>{
    e.preventDefault();
    const filter_status = document.getElementById('filter_priority').value;
    const domFacade = new DomFacade();
    const filter_strategy = new FilterStrategy();
    filter_strategy.filter = new PriorityFilter();
    domFacade.renderTasks(filter_strategy.filter_task_list(task_list, filter_status));
});