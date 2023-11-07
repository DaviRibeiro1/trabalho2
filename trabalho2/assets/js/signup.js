let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

toggle.onclick = ()=>{
    menu.classList.toggle('active')
}

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false


let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCPF = false

function mascara_cpf() {
  if (cpf.value.length == 3 || cpf.value.length == 7){
    cpf.value += "."
  } else if(cpf.value.length == 11){
    cpf.value += "-"
  }
}

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length < 3){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome deve conter no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length < 6){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha deve contar no minimo 5 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Usuário'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

email.addEventListener('keyup', () => {
  if(!email.checkValidity()){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email inválido'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email:'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

telefone.addEventListener('keyup', () => {
  if(telefone.value.length < 9){
    labelTelefone.setAttribute('style', 'color: red')
    labelTelefone.innerHTML = 'Telefone inválido'
    telefone.setAttribute('style', 'border-color: red')
    validTelefone = false
  } else {
    labelTelefone.setAttribute('style', 'color: green')
    labelTelefone.innerHTML = 'Telefone'
    telefone.setAttribute('style', 'border-color: green')
    validTelefone = true
  }
})


cpf.addEventListener('keyup', () => {
  if(cpf.value.length < 14 ){
    labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = 'CPF Invalido'
    cpf.setAttribute('style', 'border-color: red')
    validCPF = false
  } else {
    labelCpf.setAttribute('style', 'color: green')
    labelCpf.innerHTML = 'CPF:'
    cpf.setAttribute('style', 'border-color: green')
    validCPF = true
  }
})


function cadastro(){
  if(validNome && validSenha && validEmail && validTelefone && validCPF){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: email.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(()=>{
        window.location.href = '/teste/assets/html/login.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}