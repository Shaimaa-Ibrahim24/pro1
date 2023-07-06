//to change section background
/*
let colors = ["#606c38", "#bde0fe", "#e76f51"]
let i = 0;
secbg.addEventListener("click", (eo) => {
    let section = document.querySelectorAll("section");
    section.forEach(item => {
        item.style.backgroundColor = colors[i];
        
    });
    if (i < colors.length-1) {
        i++;
    }else{
        i = 0;
    }
})
*/
//to change section background in onother way
/*
let colors = ["#606c38", "#bde0fe", "#e76f51"];
secbg.addEventListener("click", (eo) => {
    let section = document.querySelectorAll("section");
    let random = Math.round(Math.random() * (colors.length -1));
    section.forEach(item => {
        item.style.backgroundColor = colors[random];
        
    });
})
*/
//to change section background in onother way
//function to do the same in another way
/*
const myFunc = () => {
    return Math.round(Math.random() * 255);
}
secbg.addEventListener("click", (eo) => {
    let section = document.querySelectorAll("section");
    let rgb1 = myFunc();
    let rgb2 = myFunc();
    let rgb3 = myFunc();
    section.forEach(item => {
        item.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
        
    });
})
//to change section background in onother way
secbg.addEventListener("click", (eo) => {
    let random1 = Math.random().toString(16).slice(2,8);
random1 = `#${random1}`
   let section = document.querySelectorAll("section");
   section.forEach(item => {
       item.style.backgroundColor = random1;
       
   });
})
*/
//to change section background in onother way by not using foreach
secbg.addEventListener("click", (eo) => {
    let random1 = Math.random().toString(16).slice(2,8);
random1 = `#${random1}`
   let section = document.querySelectorAll("section");
   for (let i = 0; i < section.length; i++) {
    section[i].style.backgroundColor = random1;
   }
})

