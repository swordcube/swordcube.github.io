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