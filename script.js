
var person =[
    document.querySelector(".tod"),
    document.querySelector(".phill")
]

var req = document.querySelector("#req")
cont = person.length;

yourCon = document.querySelector("#conYou")
yourContPer= 500;

var namePerfil = document.querySelector("#name");

function borrar(id) {
    person[id].remove();
    cont --;
    req.innerText = cont;

}

function changeName() {
    console.log(namePerfil);
    namePerfil.innerText = "Camilo Sesto"
}

function acceptar(id) {
    person[id].remove();
    cont --;
    req.innerText = cont;
    yourContPer ++;
    yourCon.innerText = yourContPer;

}