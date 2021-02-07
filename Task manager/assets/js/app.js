
const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const reloadIcon = document.querySelector('.fa');

const desending =document.querySelector('.desend')

const asending = document.querySelector('.assend')

const action=document.querySelector('.card-action')

const drop_button=document.createElement('button')

var des=false

action.appendChild(drop_button) 

form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('input', filterTasks);

desending.addEventListener('click', desendingOrder)

asending.addEventListener('click', asendingOrder)

reloadIcon.addEventListener('click', reloadPage);

taskList.addEventListener('click', removeTask);



// Add New  Task Function definition 
function addNewTask(e) {
if(taskInput.value===""){
    taskInput.style.borderColor = "red";
    return;
}
// Create an li element when the user adds a task 
const li = document.createElement('li');
// Adding a class
li.className = 'collection-item';
// Create text node and append it 
li.appendChild(document.createTextNode(taskInput.value));
// Create new element for the link 
const link = document.createElement('a');
// Add class and the x marker for a 
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append link to li
li.appendChild(link);
// Append to ul 
taskList.appendChild(li);

taskInput.value = "";
e.preventDefault(); //disable form submission

}

// Clear Task Function definition 
function clearAllTasks() {

    alert("Clear tasks ....");
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }


}
// Filter tasks function definition 
function filterTasks(e) {

    All_tasks=document.querySelectorAll('.collection-item')
    All_tasks.forEach(element => {
        if(element.textContent.indexOf(filter.value)===-1){
            element.style.display="none";
        }
        else{
            element.style.display="block"
        }
       
    });
    

}

// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}
// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

function desendingOrder(e){
    if(des===true){
        return
    }
    All_tasks=document.querySelectorAll('.collection-item')
    n=All_tasks.length
    All_tasks.forEach(element => {
        element.style.display="none";
    });

    
    for(let i=0; i<n;i++){
        const li=document.createElement('li');
        li.className="collection-item";
        li.appendChild(document.createTextNode(All_tasks[n-i-1].textContent))
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    }
   des=true

}

function asendingOrder(e){
    if(des===false){
        return
    }
    All_tasks=document.querySelectorAll('.collection-item')
    n=All_tasks.length
    All_tasks.forEach(element => {
        if (element.style.display==="none"){
            element.style.display="block";
        }
        else{
            console.log("remove")
            taskList.removeChild(taskList.lastElementChild);
        } 

    });

   des=false

}
