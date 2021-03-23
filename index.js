let socket = new WebSocket("wss://hidden-scrubland-60977.herokuapp.com/");

let prom = prompt("введите ваш ник")

let inp = document.getElementById("inp");

let but = document.getElementById("but");

let t = false;
socket.addEventListener("open",(e)=>{
alert("Server open");
socket.send("<p>просоеденился новый пользователь под ником: "+prom+"</p>")
but.addEventListener("click",function () {
    socket.send(`<p>${prom}: ${inp.value}</p>`);
});
});
socket.onclose = e => {
socket.send(`У ${prom} проблемы с интернетом либо он или она отсоеденились от беседы`);
alert("server close");
};
socket.onmessage = function (e) {
console.log(e.data);
document.getElementById("m").innerHTML+=e.data;
};