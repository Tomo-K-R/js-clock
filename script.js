function currentTime() {
    let date = new Date(); /* new Date() creates a date object with the current date and time */
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let  min = date.getMinutes();
    let sec =  date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = date.toDateString() + " " + hour + ":" + min + ":" + sec
    let t = setTimeout(function(){currentTime()}, 1000);
    /* The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime();