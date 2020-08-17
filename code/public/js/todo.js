const form = document.getElementById('form')
const options = document.getElementById('options')
const new_task = document.getElementById('new_task')
const cancel = document.getElementById('cancel')
const textarea_task = document.getElementById('write_task')
const sugerence = document.getElementById('sugerence')
const section = document.getElementById('section')



new_task.addEventListener('click', ()=>{

    if(section.childNodes[0].id === 'sugerence'){
     
        sugerence.style.display = 'none'
    
    }



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

        if(section.childNodes[0].id === 'sugerence'){
            
            sugerence.style.display = 'flex'
        
        }
        
        form.style.display = 'none'

    },200)

})