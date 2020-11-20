document.querySelectorAll('.question').forEach((question)=>{
question.addEventListener('click', (e)=>{
    if(e.target.nextElementSibling.style.display === 'block'){
        e.target.nextElementSibling.style.display = 'none';
        e.target.classList.remove('active');
        console.log('none');
        
    }else{
        e.target.nextElementSibling.style.display = 'block';
        e.target.classList.add('active');
        console.log('block');
    }
});
});