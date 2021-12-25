let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener('submit',formHandler);

function formHandler(event){
    event.preventDefault();
    let userNameDOM = document.querySelector("#username");
    let scoreDOM = document.querySelector("#score");
    addItemtoList(userNameDOM.value,scoreDOM.value);
    userNameDOM.value="";
    scoreDOM.value="";

}


/* <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
</li> */
function addItemtoList(name,score){
    let mainListDOM = document.querySelector("#userList");
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${name}<span class="badge bg-primary rounded-pill">${score}</span>`;
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
    
    mainListDOM.append(liDOM);
    
}
