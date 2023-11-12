let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = ()=>{
    menu.classList.toggle('active')
}


admLogado()

function admLogado(){

    let userValid = {
        nome: '',
        user: 'admin@admin',
        senha: ''
    }
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    if (listaUser && listaUser.length > 0){
    listaUser.forEach((item) => {
  
        userValid = {
            nome: item.nomeCad,
            user: item.userCad,
            senha: item.senhaCad
        }
        
    })
    }
  
    login = document.getElementById("login");
    if(localStorage.getItem("token") == null){
        login.href = "/trabalho2/assets/html/login.html";
    } else if (userValid.user == "admin@admin" ){
        login.href = "/trabalho2/assets/html/admin.html"
    }
    else if (userValid.user != "admin@admin"){
        login.href = "/trabalho2/assets/html/user.html";
    }
  
    }
