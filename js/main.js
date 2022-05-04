

let tasks = []
loadFromLocalStorage()


//// CREATING A NEW ITEM ELEMENT/////////////

const listItem = document.querySelector('.list-item')

function createListItem(text, isDone, index){
    let e = listItem.cloneNode(true)
    e.querySelector('.item-text').innerHTML = text;
    e.removeAttribute("style")
    e.querySelector('.inner-checkbox').checked = isDone;

    let h = () => {
        deleteTask(index)
    }

    let c = () => {
        checkItem(index)
    }

    e.querySelector('.item-delete').addEventListener('click', h)
    e.querySelector('.inner-checkbox').addEventListener('click', c)

    document.querySelector('.list').appendChild(e)
}

///////////////////////////



//////// ITEMS RENDERING /////////////////
function renderItems(){

    const toDelete = document.querySelectorAll('.list-item')
    
    toDelete.forEach((el) => {
        el.remove()
    })

    tasks.forEach((el, i) => {
        createListItem(el.text, el.isDone, i)
    })

}
///////////////////////////////////////////



////////// HANDLING OF FORM SUBMITTING ///////////////
function formHandler(event) {
    event.preventDefault()
    // console.log(event)
    let text = event.srcElement[0].value
    tasks.push({text: text, isDone: false})
    saveToLocalStorage()
    renderItems()
}

document.querySelector('.input-form').addEventListener('submit', formHandler)

/////////////////////////////////////////////////////

renderItems()

//////// CHECKBOX AND DELETE HANDLERS //////


function deleteTask(index){

    tasks.splice(index, 1)
    saveToLocalStorage()
    renderItems()
}

function checkItem(index){
    let s = tasks[index].isDone 

    if(s == true){
        tasks[index].isDone = false
    }
    else {
        tasks[index].isDone = true
    }

    saveToLocalStorage()
    renderItems()
}



//////////////////////////////////////////

/////////LOCAL STORAGE FUNCTIONS///////////
function saveToLocalStorage(){
    let data = JSON.stringify(tasks)
    localStorage.setItem('data', data)
}

function loadFromLocalStorage(){
    let data = localStorage.getItem('data')

    if(data != null){
        tasks = JSON.parse(data)
    }
    
}
///////////////////////////////////////////


