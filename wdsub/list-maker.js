const CHECKBOX = "<button onclick='uncrossItem(this)'><svg viewBox='0 0 512 512' width='15' title='check-circle' style='fill: gray;'><path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' /></svg></button>";
const UNCHECKBOX ="<button onclick='crossItem(this)'><svg viewBox='0 0 512 512' width='15' title='circle'><path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z' /></svg></button>";

let itemInput = document.getElementById("item-input");
let list = document.getElementById("list");
//if (document.cookie != "") loadItems();

//UNCOMMENT THIS LINE WHEN READY FOR PUBLISH!!!!!!!!!!!!!!!
itemInput.focus();

document.addEventListener("keydown", (key) => {
  console.log(key.code);
  if (key.code == "Enter") addItem(key);
});

document.addEventListener("beforeunload", () => saveItems());

function addItem(event) {
  if (itemInput.value !="") {
    let _newItem = itemInput.value;
    let _elem = document.createElement("li");
    _elem.innerText = _newItem;
    _elem.innerHTML =  UNCHECKBOX + _elem.innerHTML;
    list.append(_elem);
    itemInput.value = "";
    itemInput.focus();
  }
}

function clearList(event) {
  list.innerHTML = "";
}

function crossItem(elem) {
  let parentLI = elem.parentElement;
  parentLI.style.textDecoration = "solid gray 0.1em line-through";
  parentLI.style.color = "gray";
  parentLI.innerHTML = CHECKBOX + parentLI.innerText;
}

function uncrossItem(elem) {
  let parentLI = elem.parentElement;
  parentLI.style.textDecoration = "none";
  parentLI.style.color = "black";
  parentLI.innerHTML = UNCHECKBOX + parentLI.innerText;
}
/*
function saveItems() {
  document.cookie = "items=" + list.innerHTML;
  console.log(document.cookie);
}

function loadItems() {
 let cookieArr = document.cookie.substring(6);
  list.innerHTML = cookieArr;
}*/



