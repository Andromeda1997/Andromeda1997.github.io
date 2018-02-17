var dayName = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
var monName = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
var today = new Date
var currentdate = (dayName[today.getDay()] + ", " + today.getDate() + " " + monName[today.getMonth()] + " " + today.getFullYear())
document.getElementById('currentdate').innerHTML = currentdate;