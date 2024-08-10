const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listComplete = document.querySelector('.list-task');

let myListOfItens = JSON.parse(localStorage.getItem('list')) || []; 

function addNewTask() {
    if (input.value.trim() !== "") {
        myListOfItens.push({
            tarefa: input.value,
            concluida: false
        });
        showTask();
        input.value = "";
    }
}

function showTask() {
    let novaLi = '';
    myListOfItens.forEach((item, index) => {
        novaLi += `
            <li class="task ${item.concluida ? "done" : ""}">
                <img src="./img/lixeira.png" alt="excluir tarefa" onclick="deletarItem(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/check.jpg" alt="check-na-tarefa" onclick="taskComplete(${index})">
            </li>
        `;
    });

    listComplete.innerHTML = novaLi;
    localStorage.setItem('list', JSON.stringify(myListOfItens)); 
}

function taskComplete(index) {
    myListOfItens[index].concluida = !myListOfItens[index].concluida;
    showTask();
}

function deletarItem(index) {
    myListOfItens.splice(index, 1);
    showTask();
}

function recarregarTask() {
    showTask(); 
}

button.addEventListener('click', addNewTask);
document.addEventListener('DOMContentLoaded', recarregarTask);  
