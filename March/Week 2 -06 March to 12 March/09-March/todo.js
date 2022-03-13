const todo = [];
const render = function() {
    const parent_container = document.getElementById("container-list");
    parent_container.innerHTML = "";
    for (let i = 0; i < todo.length; i += 1) {
        const new_task = document.createElement("p");
        new_task.innerText = todo[i];
        parent_container.appendChild(new_task);
        parent_container.style.fontWeight = "bold";
    }
};
const add_item = function() {
    const ip = document.getElementById("ip_todo");
    const new_todo = ip.value;
    todo.push(new_todo);
    ip.value = "";
    render();
};
const buttn = document.getElementById("btn-add");
buttn.addEventListener("click", add_item);