let socket = new WebSocket("wss://fast-dusk-26510.herokuapp.com/");

let prom = prompt("введите ваш ник")

let inp = document.getElementById("inp");

let but = document.getElementById("but");

let t = false;
socket.addEventListener("open",(e)=>{
alert("Server open");
socket.send("просоеденился новый пользователь под ником: "+prom)
but.addEventListener("click",function () {
    socket.send(`<p>${prom}: ${inp.value}</p>`);
    console.log("sdg");
});
});
socket.onclose = e => {
socket.send(`У ${prom} проблемы с интернетом либо он или она отсоеденились от беседы`)
alert("server close");
};

socket.onmessage = function (e) {
document.getElementById("m").innerHTML+=e.data;
};

