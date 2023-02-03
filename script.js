let $open_modal = document.querySelector('#burMenu')
let $modal = document.querySelector('.modal')
let $close_modal = document.querySelector("#close_modal")
let content = document.querySelector('.content')

$open_modal.addEventListener('click', ()=>{
    $modal.style.display = 'block'
    $open_modal.style.display = 'none'
})

$modal.addEventListener('click' , ()=>{
    $modal.style.display = 'none'
    $open_modal.style.display = 'block'
})

$close_modal.addEventListener('click', ()=>{
    $modal.style.display = "none"
})
content.addEventListener('click', (e)=>{
    e.stopPropagation()
})