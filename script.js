// this function will continuosly update the initClock
// by using built-in Date function of Jacascript

function updateClock() {

    //initiazling the Date object
    var now = new Date();

    //storing the current date, time values in respective
    //variables
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hour == 0) {
        hour = 12
    }

    //conditon to change AM and PM period;
    if (hour > 12) {
        hour = hour - 12;
        pe = "PM";
    }

    //this is to place 0 to digit in two digit format
    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    //storing Calender months in an array
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //storing Calender week in an array
    var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //storing id of div from index page in an array
    var ids = ["dayname", "month", "daynum", "year", "hour", "minute", "seconds", "period"];

    var values = [weeks[dname], months[mo], dnum.pad(2), yr, hour.pad(2), min.pad(2), sec.pad(2), pe];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1)
}