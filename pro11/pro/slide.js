console.log("object");
const imgArr = [`<img class="ima" src="imgs/pexels-photo-1269968.jpeg">`, `<img class="ima" src="imgs/pexels-photo-103123.jpeg">`, `<img class="ima" src="imgs/pexels-photo-1639813.jpeg">`, ` <img class="ima" src="imgs/pexels-photo-2101187.jpeg">`, ` <img class="ima" src="imgs/pexels-photo-2318543.webp">`]
console.log(imgArr);
let i = 0;
pics.innerHHTML += imgArr[0]
next.addEventLisiner("click", (eo) => {
    i++;
    pics.innerHHTML += imgArr[i]
})