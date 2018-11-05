function clock(){
	let clock = new Date();
let hour = clock.getHours();
let minute = clock.getMinutes();
let second = clock.getSeconds();

if(hour < 10){
	hour= "0" +  hour;
}

if(minute < 10){
	minute= "0" +  minute;
}

if(second < 10){
	second= "0" +  second;
}
document.querySelector("#hour").innerHTML =  hour;
document.querySelector("#minutes").innerHTML = ": " + minute;
document.querySelector("#seconds").innerHTML = ": " + second;
}

setInterval(clock,10);