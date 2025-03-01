const completeButtons = document.querySelectorAll('.complete-btn');

for (let i= 0; i < completeButtons.length; i++);
const completeBtn = completeButtons(i);

completeBtn.addEventListener('click', function(event){
     completeBtn.setAttribute('disabled', true);
     alert('Board Updated Successfully...');
     const completeTask = completeBtn.getAttribute('disabled')
     === 'true'? 1 :0;
     const currentTask = parseInt(document.getElementById('task-assigned').innerText);
     
    


})