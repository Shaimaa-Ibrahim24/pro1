let i = 1;
const newf = () => {
    let title = "Courses4Arab";
    mm.innerText = title.slice(0, i);
    i++;
    /*
    if(title.length < i){
        i = 0;
    }
    */
}
setInterval(newf, 300);