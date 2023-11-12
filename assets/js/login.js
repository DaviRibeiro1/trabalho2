let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = ()=>{
    menu.classList.toggle('active')
}


function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = [];
  
  let userValid = {
    nome: 'admin',
    user: '',
    senha: ''
  }
  let adminValid = {
    nome: 'admin',
    user: 'admin@admin',
    senha: '123123'
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  if (listaUser && listaUser.length > 0){
    listaUser.forEach((item) => {
      if(usuario.value == item.userCad && senha.value == item.senhaCad){
          
        userValid = {
            nome: item.nomeCad,
            user: item.userCad,
            senha: item.senhaCad
        }
        
      }
    })
  }
      
    if(usuario.value == userValid.user || usuario.value === adminValid.user && senha.value == userValid.senha || senha.value == adminValid.senha){
      window.location.href = '/trabalho2/index.html'
      
      let mathRandom = Math.random().toString(16).substr(2)
      let token = mathRandom + mathRandom
      
      localStorage.setItem('token', token)
      localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
      userLabel.setAttribute('style', 'color: red')
      usuario.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Email ou senha incorretos'
      usuario.focus()
    }
    
}