var header = document.querySelector("#name");
var phil = document.querySelector("#phil")
var todd = document.querySelector("#todd")

function editProfile(){
    header.innerHTML = "Marques Johnson";
}

function removePhil(){
    phil.remove();
}

function removeTodd(){
    todd.remove();
}