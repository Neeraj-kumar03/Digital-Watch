let hrs = document.querySelector("#hrs");
let mint = document.querySelector("#mint");
let sec = document.querySelector("#sec");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") +currentTime.getHours() ;
    mint.innerHTML = (currentTime.getMinutes()<10?"0":"") +currentTime.getMinutes() ;
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") +currentTime.getSeconds() ;
}, 1000)

