const digital = () => {
    const newTime = new Date()
 let dateNow = newTime.toDateString();
 let hour = newTime.getHours();
 let minute = newTime.getMinutes();
 let seconds = newTime.getSeconds();
 let pmam = "am"
 if (hour > 12) {
    hour = hour - 12;
    pmam = "pm";
 }
 if (minute < 10) {
    minute = `0${minute}`;
 }
 if (seconds < 10) {
    seconds = `0${seconds}`;
 }
 
 clock.innerHTML = `<div class="date">${dateNow}</div>
 <div class="time">${hour}:${minute}:${seconds} ${pmam}</div>`; 
}
setInterval(digital, 1000);


 