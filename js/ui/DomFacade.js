import {add_task_local_storage, get_task_local_storage} from '../utilities/local_storage_manager.js'
export class DomFacade{
    renderTasks(task_list){
        const task_list_section = document.getElementById('task_list_section');
        task_list_section.innerHTML = '';
        for (let i = 0; i < task_list.length; i++) {
            const task_card = document.createElement('article');
            task_card.innerHTML = `
                <p>${task_list[i].id}</p>
                <p>${task_list[i].description}</p>
                <p>${task_list[i].priority}</p>
                <p>${task_list[i].done}</p>
                <p>${task_list[i].createdAt}</p>
            `;

            const delete_button = document.createElement('button');
            const update_button = document.createElement('button');
            delete_button.textContent = 'Borrar Tarea';
            update_button.textContent = 'Completar Tarea';

            task_card.appendChild(delete_button);
            task_card.appendChild(update_button);

            delete_button.addEventListener('click', (e) =>{
                task_list.splice(i,1);
                add_task_local_storage(task_list);
                task_card.innerHTML = '';
            });

            update_button.addEventListener('click', (e)=>{
                task_list[i].done = 'true';
                add_task_local_storage(task_list)
                this.renderTasks(task_list);
            });

            this.changeBackGroundColor(task_list[i], task_card);
            task_list_section.appendChild(task_card);
        }
    }

    changeBackGroundColor(task, task_card){
        if (task.done === 'true'){
            task_card.style.backgroundColor = 'green';
        }else{
            task_card.style.backgroundColor = 'red';
        }
    }
}