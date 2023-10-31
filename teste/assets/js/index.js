const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("age-verification-popup");
    const menu = document.getElementById("menu")
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

  // Mostra o pop-up quando a página carrega
    popup.style.display = "block";
    menu.style.display = "none"

  // Evento do botão "Sim"
    yesButton.addEventListener("click", function () {
      // Redirecionar para a página desejada (pode ser uma página de conteúdo adulto)
      // window.location.href = "sua_pagina_adulto.html";
      // Fechar o pop-up
        popup.style.display = "none";
        menu.style.display = "flex"
    });

  // Evento do botão "Não"
  noButton.addEventListener("click", function () {
      // Redirecionar para uma página de conteúdo seguro para todas as idades
      window.location.href = "https://www.ambev.com.br/consumo-responsavel-aviso";
      // Fechar o pop-up
      popup.style.display = "none";
  });
});

let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')

toggle.onclick = ()=>{
    menu.classList.toggle('active')
}