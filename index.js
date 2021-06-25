let count = document.getElementById("countEl")
let saveEl = document.getElementById("save-box")
let c = 0

function inc(){
    c+=1
    count.innerText = c;
}
function dec(){
    c-=1
    count.innerText = c;
}
function save(){
    let init = " - "
    if(saveEl.innerText=="Saved :"){init=""}
    saveEl.textContent += init+ count.innerText
    count.innerText = 0
    c = 0
}
function myfunc(){
    saveEl.innerText = "Saved :";
    count.innerText = "0";
    c = 0;
}