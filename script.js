const addBtn = document.querySelector('.addButton')
const popUp = document.querySelector('#popUp')
const closePopUps = document.querySelectorAll('.closePopUp')
const inptTxt = document.querySelector('#inputText')
const form = document.querySelector('form')
// const uechlst = document.querySelector('.updateEachList')
// const dechlst = document.querySelector('.deleteEachList')
const updfld = document.querySelector('.updateField')
const delfld = document.querySelector('.deleteField')
const listItem = document.querySelector('.listItem')
const updateTxt = document.querySelector('#updateTxt')
const body = document.querySelector('#body')
const yes = document.querySelector('.dfYes')
const no = document.querySelector('.dfNo')
const eachList = document.querySelectorAll('.eachList')
const iconsDiv = document.querySelector('.iconsDiv')
const listArray = []
const uechlst = document.createElement('button')
const dechlst = document.createElement('button')
const cechlst = document.createElement('button')





// pushes form text into the listItem
form.addEventListener("submit", (e) =>{
    e.preventDefault() 
    
    loopList() 

    console.log(listItem.textContent)

    removePopUp()
})

// pushes listItem into the listArray
function loopList (){
    let txt = inptTxt.value
    listArray.push(txt)
    for( i = 0; i < listArray.length; i++){
        
    }
    listItem.textContent = `${i}:${txt}`
    setData()
}

// Adds listArray to the localStorage
function setData() {
    localStorage.setItem(`listArray`, JSON.stringify(listArray));
  }


//   Returns listArray on windows relaod
  function restore() {
    let getListItem = localStorage.getItem('listArray')
    if(getListItem === "undefined" || getListItem === null) {
        listArray = [];
    }else{
        listArray = JSON.parse(getListItem)
        loopList(listArray)
    }
  }

addBtn.addEventListener("click", () =>{
    body.classList.toggle('active')
    popUp.classList.add('openPopUp')
    uechlst.classList.add('turnOff')
 dechlst.classList.add('turnOff')
 })

 function removePopUp() {
    popUp.classList.remove('openPopUp')
    addBtn.classList.remove('turnOff')
    body.classList.remove('active')
    updfld.classList.remove('active')
    delfld.classList.remove('active');
    uechlst.classList.remove('turnOff')
    dechlst.classList.remove('turnoff');
    inptTxt.value = ''
}

closePopUps.forEach(closePopUp =>{
   closePopUp.addEventListener("click",removePopUp)
})






dechlst.addEventListener('click',() => {
    delfld.classList.add('active');
    body.classList.add('active');
    yes.addEventListener('click',() => {
        alert('delete ')
    })
    no.addEventListener('click',removePopUp);
    //   alert('how far')
})

uechlst.addEventListener('click',() => {
    updfld.classList.add("active")
    body.classList.add('active')
    addBtn.classList.add('turnOff')
    updateTxt.addEventListener('submit' ,(e) => {
        e.preventDefault()
      
      txt2 = listItem.value;
      updateTxt.textContent = txt2;
      console.log(txt2);
    })
})









 