const plus = document.querySelectorAll(".plus")

plus.forEach(item => {
    item.addEventListener("click", (eo) => {
        
       const content = eo.target.parentElement.parentElement.getElementsByClassName("content")[0];
       content.classList.toggle("active")
       
       item.classList.toggle("hide")
       if(item.classList.contains("hide")){
        item.innerText = ` -`;
        content.style.height = `${content.scrollHeight}px`
       }else{
        item.innerText = ` +`;
        content.style.height = `0`
       }
       
    })
})