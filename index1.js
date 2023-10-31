
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("age-verification-popup");
    const slide = document.getElementById("slideshow")
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

  // Mostra o pop-up quando a página carrega
    popup.style.display = "block";
    slide.style.zIndex = "-1"
  // Evento do botão "Sim"
    yesButton.addEventListener("click", function () {
      // Redirecionar para a página desejada (pode ser uma página de conteúdo adulto)
      // window.location.href = "sua_pagina_adulto.html";
      // Fechar o pop-up
        popup.style.display = "none";
        slide.style.zIndex = "0"
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

const images = document.querySelectorAll('.slideshow img');
let currentImage = 0;

function nextImage() {
    images[currentImage].style.opacity = 0;
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.opacity = 1;
}

// Iniciar a transição automaticamente a cada 3 segundos
setInterval(nextImage, 3000);