const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

function add_task(){
    if(input_box.value === ''){
        alert("You need to add a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.append(li);
        input_box.value = ""
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    save_to_storage();
}
list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save_to_storage();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_to_storage();
    }

}, false);

function save_to_storage(){
    localStorage.setItem("data", list_container.innerHTML)
}

function To_Do(){
    list_container.innerHTML = localStorage.getItem("data");
}
To_Do();