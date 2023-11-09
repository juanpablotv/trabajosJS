const InputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

let listaTareas = [];

function createTarea(message, color = 'primary'){
const tarea = document.createElement('div');
tarea.classList.add('alert');
tarea.classList.add('alert-' + color);
tarea.setAttribute('role','alert');
let buttons = "<div>";
buttons += '<button class="btn red"></button>';
buttons += '<button class="btn yellow"></button>';
buttons += '<button class="btn green"></button>';
buttons += '<button class="btn X"> X </button>';
buttons += '</div>';
tarea.innerHTML = `<div>${ message }</div>${buttons}`;
return tarea;
}

function AddTarea(){
    const data = InputTarea.value;
    if(data){
        listaTareas.push({"tarea": data, "status": "primary"});
        localStorage.setItem("tareas", JSON.stringify(listaTareas));
        //guardar en local Storage
        const tarea = createTarea(data);
        tareas.appendChild(tarea);
        InputTarea.value = '';
    }
}

function getButton(e){
    if(e.target.classList.contains('btn')){
         const tareaActual = e.target.parentElement.parentElement;
         const dato = tareaActual.querySelector('div').innerText;
         //buscar en lista 
         const idxT = listaTareas
                     .findIndex(item => item.tarea === dato)
         const action = e.target.classList[1];
         
         console.log(idxT);
         console.log(dato);
         switch(action){
            case 'red':
                tareaActual.classList = [];
                tareaActual.classList.add('alert', 'alert-danger');
                listaTareas[idxT].status = 'danger';
                break;
            case 'yellow':
                tareaActual.classList = [];
                tareaActual.classList.add('alert', 'alert-warning');
                listaTareas[idxT].status = 'warning';
                break;

            case 'green':
                tareaActual.classList = [];
                tareaActual.classList.add('alert', 'alert-success');
                listaTareas[idxT].status = 'success';
                break;

            case 'X':
                tareaActual.remove();
                listaTareas.splice(idxT, 1);
                break;       

         }
         localStorage.setItem("tareas", JSON.stringify(listaTareas));

    }


}

function leeTareas(){
    if(localStorage.getItem("tareas")){
        listaTareas = localStorage.getItem("tareas");

        listaTareas = JSON.parse(listaTareas);
        listaTareas.forEach(tareaActual => {
            tareas.appendChild(createTarea(tareaActual.tarea, tareaActual.status));
        });
        
    }
}

leeTareas();

btnTarea.addEventListener('click', AddTarea );
tareas.addEventListener('click', getButton);