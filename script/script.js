const completeButtons= document.querySelectorAll(".complete-btn");
for(let i = 0; i < completeButtons.length; i++){
    const completeBtn= completeButtons[i];
    completeBtn.addEventListener("click", function(event){
        completeBtn.setAttribute("disabled", true);
        alert("Board Updated Successfully.....");

        const completeTask= completeBtn.getAttribute("disabled") === "true" ? 1 : 0;

        const CurrentTask= parseInt(document.getElementById("task-assigned").innerText);
        const TotalCompleteJob= parseInt(document.getElementById("total-complete-job").innerText);
        const remainingTask= CurrentTask - completeTask;

        if(remainingTask === 0){
            alert("Congrats!! You have completed all the current task");
        }
         

        let now = new Date();
         let forMattedTime = now.toLocaleString('en-US', {
           hour: '2-digit',
             minute: '2-digit',
          second: '2-digit',
          hour12: '2-digit'

          })


        document.getElementById("task-assigned").innerText= remainingTask;
        const numOfCompleteJob= TotalCompleteJob + completeTask;
        document.getElementById("total-complete-job").innerText= numOfCompleteJob;

        const taskTitle= document.querySelectorAll(".task-title")[i].innerText;

        const taskLog= document.getElementById("task-log");
        const div= document.createElement("div");
        div.innerHTML= `
            <div class="bg-[#F4F7FF] p-4 text-justify rounded-lg space-y-3 logs">
                <p>You have Completed the ${taskTitle} at ${forMattedTime} </p>      
            </div>
        `
        taskLog.appendChild(div);
    });  
}


    
document.getElementById("clear-logs").addEventListener("click", function(event){
    const logs= document.getElementsByClassName("logs");
    for(let i= 0; i < logs.length; i++){
        const log= logs[i];
        log.classList.add("hidden");
    }

});

document.getElementById('discover-new-page').addEventListener('click', function() {
    window.location.href=('main.html');

})

const colorBtn = document.getElementById('bg-image');

colorBtn.addEventListener('click',  function(){
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});






