let body = document.querySelector("body");

let header = document.querySelector("header");
let chain = document.querySelector(".chain");

chain.addEventListener("click", (eo) => {
    body.classList.toggle("change");
})
let color = document.querySelector(".color")


//to make hover
color.addEventListener("mousemove", (eo) => {
    hidden.style.display = "block";
    
})
//to remove hover
color.addEventListener("mouseout", (eo) => {
    hidden.style.display = "none";
})
//to change header background
headbg.addEventListener("click", (eo) => {
    header.style.backgroundColor = `hsl(${Math.round(Math.random() * 360)}, 100%, 50%)`
})

//function to do the same in another way
const myFun = () => {
    return Math.round(Math.random() * 360);
}
//to change title background
titbg.addEventListener("click", (eo) => {
    let title = document.querySelectorAll("h1:not(#mm)");
    title.forEach(item => {
    item.style.backgroundColor = `hsl(${myFun()}, 80%, 50%)`;
    });  
})
//to change title color
titcolor.addEventListener("click", (eo) => {
    let title = document.querySelectorAll("h1:not(#mm)");
    title.forEach(item => {
        item.style.color = `hsl(${myFun()}, 80%, 50%)`;
    });
})
// to make animation
but3.addEventListener("click", (eo) => {
    const parentHeart = document.createElement("div");
    newo.append(parentHeart);
    const stop = setInterval(() => {
        const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = `<div id="emo">&#129505;</div>`;
    heart.style.left = `${Math.random()* 100}%`;
    heart.style.animationDuration = `${(Math.random()+0.5) *1.5}s`;
    parentHeart.append(heart);
    }, 50);
    setTimeout(() => {
       clearInterval(stop);
    }, 1000);
    setTimeout(() => {
      parentHeart.remove();
    }, 3000);
})
