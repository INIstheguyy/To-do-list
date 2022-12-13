const addBtn = document.querySelector(".addButton");
const popUp = document.querySelector("#popUp");
const closePopUps = document.querySelectorAll(".closePopUp");
const inptTxt = document.querySelector("#inputText");
const form = document.querySelector("form");
// const uechlst = document.querySelector('.updateEachList')
// const dechlst = document.querySelector('.deleteEachList')
const updfld = document.querySelector(".updateField");
const delfld = document.querySelector(".deleteField");
const listItem = document.querySelector(".listItem");
const updateTxt = document.querySelector("#updateTxt");
const body = document.querySelector("#body");
const yes = document.querySelector(".dfYes");
const no = document.querySelector(".dfNo");
const eachList = document.querySelector(".eachList");
const iconsDiv = document.querySelector(".iconsDiv");
const listArray = [];

const cechlst = document.createElement("button");
const dechlst = document.createElement("button");
const uechlst = document.createElement("button");

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
        

      const li = document.createElement("li");
      li.id = `todo-${index + 1}`;
      li.classList.add('listItem')
      li.textContent = `${todo}`;

    //   const uechlst = document.createElement("button");
      uechlst.textContent = "update";
      uechlst.addEventListener("click", () => {
        // updfld.classList.add("active");
        // body.classList.add("active");
        // addBtn.classList.add("turnOff");
        // dechlst.classList.add("turnOff");
        updateTxt.addEventListener("submit", (e) => {
          e.preventDefault();
        });
      });

    //   const dechlst = document.createElement("button");
      dechlst.textContent = "Delete"
      dechlst.addEventListener("click", () =>{
        delfld.classList.add("active");
        body.classList.add("active");
        addBtn.classList.add("turnOff");
        yes.addEventListener("click", () => {
          alert("delete ");
        });
        no.addEventListener("click", removePopUp);
      })

      div.append(li, uechlst,dechlst);
      div.classList.add('eachListItem')

      eachList.appendChild(div);
    }
  });

  setData();
}

// Adds listArray to the localStorage
function setData() {
  localStorage.setItem(`listArray`, JSON.stringify(listArray));
}

//   Returns listArray on windows relaod
function restore() {
  let getListItem = localStorage.getItem("listArray");
  if (getListItem === "undefined" || getListItem === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getListItem);
    loopList(listArray);
  }
}

addBtn.addEventListener("click", () => {
  body.classList.toggle("active");
  popUp.classList.add("openPopUp");
  uechlst.classList.add("turnOff");
  dechlst.classList.add("turnOff");
});

function removePopUp() {
  popUp.classList.remove("openPopUp");
  addBtn.classList.remove("turnOff");
  body.classList.remove("active");
    updfld.classList.remove("active");
    delfld.classList.remove("active");
    uechlst.classList.remove("turnOff");
    dechlst.classList.remove("turnoff");
  inptTxt.value = "";
}

closePopUps.forEach((closePopUp) => {
  closePopUp.addEventListener("click", removePopUp);
});




