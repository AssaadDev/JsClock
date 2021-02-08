var clck = document.getElementById("clck");

var morning = 6,
    day = 12,
    evening = 6,
    night = 11;


var hrs = new Date().getHours();
var tit = document.getElementById("title");
var ala = document.getElementById("ala");
var btn = document.getElementById("btn");
if (hrs >= morning && hrs < day) {
    document.body.style.backgroundImage = "url('/pictures/morning.jpg')";
    tit.innerHTML = 'Good morning';
    ala.style.boxShadow = "none";
    btn.style.boxShadow = "0px 0px 50px white";
}
if (hrs >= day && hrs < evening) {
    document.body.style.backgroundImage = "url('/pictures/day.jpg')";
    tit.innerHTML = 'Wanderfull day';
    ala.style.boxShadow = "0 0 100px rgb(10, 116, 216)";
    btn.style.boxShadow = "0px 0px 50px  rgb(6, 255, 172)";
}
if (hrs >= evening && hrs < night) {
    document.body.style.backgroundImage = "url('/pictures/evening.jpg')";
    tit.innerHTML = 'Good evening';
    ala.style.boxShadow = "none";
    btn.style.boxShadow = "none";

} else {
    document.body.style.backgroundImage = "url('/pictures/night.jpg')";
    tit.style.textShadow = "0 0 40px #fade98, 0 0 50px #fade98, 0 0 60px #fade98, 0 0 70px #fade98";
    var titBox = document.getElementById("ct");
    titBox.style.boxShadow = "0 0 10px #f1a738, 0 0 30px #f1a738, 0 0 60px #f1a738";
    tit.innerHTML = 'Good night';
}

setInterval(() => {
    var s = new Date().getSeconds(),
        h = new Date().getHours(),
        m = new Date().getMinutes(),
        sec, min, hou;
    //////////////////////////formating zero///////////////////
    if (s < 10) {
        sec = '0' + s.toLocaleString();
    } else {
        sec = s.toLocaleString();
    }
    if (m < 10) {
        min = '0' + m.toLocaleString();
    } else {
        min = m.toLocaleString();
    }
    if (h < 10) {
        hou = '0' + h.toLocaleString();
    } else {
        hou = h.toLocaleString();
    }
    //////////////////////////formating zero///////////////////
    clck.innerHTML = hou + ':' + min + ':' + sec;
    clck.style.textShadow = "0 0 20px pink, 0 0 40px pink, 0 0 60px pink, 0 0 80px pink"
}, 1000);


var alarmH = document.getElementById("ah").value;
var alarmM = document.getElementById("am").value;

var napH = document.getElementById("nh").value;
var napM = document.getElementById("nm").value;


function setAlarm() {
    if (alarmH == "" || alarmM == "") {
        alert("Please enter HH and MM");
    } else {
        if (alarmH == hou && alarmM == min) {
            playSound();
        }
    }

}

function playSound() {
    const audio = new Audio("https://www.youtube.com/watch?v=K9VIbCBSIJE");
    audio.play();
}