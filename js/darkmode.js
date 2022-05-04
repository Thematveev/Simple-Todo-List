const head = document.querySelector('head')

const el = document.createElement('link')
el.setAttribute('rel', 'stylesheet')
el.setAttribute('href', './css/dark.css')



function turnDark(){
    head.appendChild(el)
}


function turnLight(){
    el.remove()
}