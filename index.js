function updateClock() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if(min < 10)
        min = "0" + min;
    
    var ampm = "AM";
    if(hr > 12) {
        hr -= 12;
        ampm = "PM";
    }
    if(hr == 0)
        hr = 12;
    
    document.getElementById("clock").innerHTML = hr + ":" + min + " " + ampm;
}
updateClock();
setInterval(updateClock, 500);

var btn = document.getElementById("start-btn");
btn.addEventListener("click", function() {
    window.alert("and a fortune cookie told me i was goated GONGG");
});
btn.onmouseover = function() {
    btn.src = "./img/xp_start_button2.png";
};
btn.onmouseout = function() {
    btn.src = "./img/xp_start_button1.png";
};
btn.onmousedown = function() {
    btn.src = "./img/xp_start_button3.png";
};
btn.onmouseup = function() {
    btn.src = "./img/xp_start_button2.png";
};