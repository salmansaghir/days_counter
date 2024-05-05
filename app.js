function getValue(){
    //var data=document.getElementById("date").value;
var currentDate=new Date();
var eidDate= new Date("16 june 2024");
var diff=(eidDate -currentDate)/1000;

var days=Math.floor(diff/3600/24);
var hours=Math.floor((diff/3600) % 24);
var minuts=Math.floor((diff/60)%60);
var seconds=Math.floor(diff%60);

if (diff<0) return;
document.getElementById("main").innerHTML= days;
document.getElementById("main_hours").innerHTML= hours;
document.getElementById("main_minuts").innerHTML= minuts;
document.getElementById("main_seconds").innerHTML= seconds;

}
getValue();

setInterval(
    ()=>{getValue()
    },
    1000
    )

