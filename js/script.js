const add = document.querySelector(".add-btn");
const form = document.querySelector(".input-section");
const input = document.querySelector("input");
const order = document.querySelector(".change-order");



function takeValue(event) {
  let inputValue = input.value;
  let items = document.createElement("div");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  let btnDiv = document.createElement("div");
  btn.classList.add("delete-btn");
  btnDiv.classList.add("x-icon");
  p.classList.add("input");
  p.setAttribute("id", "item");
  btn.classList.add("span-delete");
  items.appendChild(p);
  items.appendChild(btn);
  btn.append(btnDiv);
  items.classList.add("items");
  if (inputValue == "") {
    alert("The input is empty!");
    return true;
  }
  p.innerHTML = inputValue;
  btnDiv.innerText = "✕";
  form.append(items);
  input.value = "";
  input.focus()
  btn.addEventListener("click", function (e) {
      items.parentNode.removeChild(items);
    },false);

}

function sortList() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementsByClassName("input-section");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    b = document.getElementsByClassName("items");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        document.getElementById("order-asc").style.display = "none";
        document.getElementById("order-desc").style.display = "block";
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;

          break;
        }
      } else if (dir == "desc") {
        document.getElementById("order-asc").style.display = "block";
        document.getElementById("order-desc").style.display = "none";
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
// input.addEventListener("keypress", function onEvent(event) {

//     if (event.key === "Enter") {
//         add.click();
//     }
// });
add.addEventListener("click", takeValue);
// add.addEventListener('click', ()=>{
//     let line = document.createElement('hr')
//     let clone = document.getElementById('clone_div')
//     clone.append(line)
// },{once:true});

order.addEventListener("click", sortList);
