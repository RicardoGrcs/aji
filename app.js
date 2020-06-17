var d = new Date();
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
document.getElementById("time").innerHTML = d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear();