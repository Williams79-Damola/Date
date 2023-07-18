let btnshow= document.querySelector('button')
let output = document.querySelector('h1')

btnshow.addEventListener('click', ()=>{
let today = new Date()
let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

let recent_date = `${month}/${date}/${year}`;
// output.innerText= recent_date;






let hours = addzero(today.getHours());
let minutes = addzero(today.getMinutes());
let seconds = addzero(today.getSeconds());





let recent_time = `${hours}: ${minutes}: ${seconds}`;


output.innerText = recent_time
console.log(recent_time)

let prepand = (hours >= 12)? 'Pm' : 'AM';
hours=(hours >=12)? hours - 12: hours;

if (hours===0 && prepand=== 'PM') {
    if (minutes===0 && seconds===0){
        hours=12;
        prepand= 'Noon';
    }
    else{
        hours=12;
        prepand= 'PM';
    }
    
}

if (hours===0 && prepand=== 'AM') {
    if (minutes===0 && seconds===0){
        hours=12;
        prepand= 'Midnight';
    }
    else{
        hours=12;
        prepand= 'AM';
    }
}

output.innerText = ("Current Time : "+hours + prepand + ":" + minutes + " :" + seconds)
console.log("Current Time : "+hours + prepand + ":" + minutes + " :" + seconds)

});


function addzero(num){
    return num < 10 ? `0${num}` : num;
}




let today =new Date();
let day = today.getDay();
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
output.innerText=("Today is :" + daylist[day] + ".");
console.log("Today is :" + daylist[day] + ".");


"use strict";

const printContent = function () {
    window.print();
}