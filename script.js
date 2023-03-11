const addBtn = document.querySelector(".addButton");
const popUp = document.querySelector("#popUp");
const closePopUps = document.querySelectorAll(".closePopUp");
const inptTxt = document.querySelector("#inputText");
const form = document.querySelector("form");
const body = document.querySelector("#body");
const ol = document.querySelector("ol");
const echLstItm = document.createElement("div");
const listArray = [];





// pushes form text into the listItem
form.addEventListener("submit", (e) => {
  e.preventDefault();

  loopList();

  removePopUp();
});

// pushes listItem into the listArray
function loopList() {
  let txt = inptTxt.value;
  listArray.push(txt);
 

  listArray.forEach((todo, index) => {
    // Add element in the html if it doesn't exist
    if (!document.getElementById(`todo-${index + 1}`)) {
        
      const div = document.createElement("div");
      const delList = document.createElement("button");
      delList.textContent = "Delete";
      const uptList = document.createElement("button");
      uptList.textContent = "Update";
      const cheList = document.createElement("button");
      cheList.textContent = "Check";

      // Delete list item function
      delList.addEventListener("click", function(){
        if (!document.getElementById(`todo-${index + 1}`)) {
          echLstItm.removeChild()
        }
      })
        

      const li = document.createElement("li");
      li.id = `todo-${index + 1}`;
      li.classList.add('listItem')
      const item = `${todo}`;
      li.textContent = item
      console.log(item);

      echLstItm.append(li, delList, uptList, cheList);
      echLstItm.classList.add('eachListItem');
      ol.appendChild(echLstItm);
    }
  });

  setData();
}

// Adds listArray to the localStorage
function setData() {
  localStorage.setItem(`listArray`, JSON.stringify(listArray));
}



addBtn.addEventListener("click", () => {
  body.classList.toggle("active");
  popUp.classList.add("openPopUp");
});

function removePopUp() {
  popUp.classList.remove("openPopUp");
  addBtn.classList.remove("turnOff");
  body.classList.remove("active");
  inptTxt.value = "";
}

closePopUps.forEach((closePopUp) => {
  closePopUp.addEventListener("click", removePopUp);
});




