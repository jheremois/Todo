const form = document.getElementById('form')
const options = document.getElementById('options')
const new_task = document.getElementById('new_task')
const cancel = document.getElementById('cancel')
const textarea_task = document.getElementById('write_task')

new_task.addEventListener('click', ()=>{

    options.style.display = 'none'
    form.style.display = 'flex'
    setTimeout(()=>{
        form.style.transform = 'scale(1)'
    },100)

})

cancel.addEventListener('click', ()=>{

    options.style.display = 'flex'
    form.style.transform = 'scale(0)'
    textarea_task.value = ''
    setTimeout(()=>{
        form.style.display = 'none'
    },200)

})