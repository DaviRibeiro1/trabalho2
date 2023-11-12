const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = ()=>{
    menu.classList.toggle('active')
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  localStorage.clear();
  window.location.href = "/trabalho2/index.html";
}
