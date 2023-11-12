if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
    } else {
    ready()
    }

    function ready(){
        const addToCartButtons = document.getElementsByClassName("buttonBuy")
        for(var i = 0; i < addToCartButtons.length; i++){
            addToCartButtons[i].addEventListener("click", addProductToCart)
        }

    
    }
    admLogado()

let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')

toggle.onclick = ()=>{
    menu.classList.toggle('active')
}

function addProductToCart(event){
    const button = event.target
    console.log(button)
    const productInfos = button.parentElement
    const productImage = productInfos.getElementsByClassName("product-image")[0].src
    const productTitle = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText
    console.log(productImage)

    let listCart = JSON.parse(localStorage.getItem('listCart') || '[]')
    
    listCart.push(
    [
        (productImage),
        (productTitle),
        (productPrice)
    ]
    )
    
    localStorage.setItem('listCart', JSON.stringify(listCart))

    alert("Produto adicionado com sucesso")
    
}

function admLogado(){

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {

        userValid = {
            nome: item.nomeCad,
            user: item.userCad,
            senha: item.senhaCad
        }
        
    })

    login = document.getElementById("login");
    if(localStorage.getItem("token") == null){
        login.href = "/trabalho2/assets/html/login.html";
    } else if (userValid.user == "admin@admin" ){
        login.href = "/trabalho2/assets/html/admin.html"
    }
    else {
        login.href = "/trabalho2/assets/html/user.html";
    }
    }
