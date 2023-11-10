if (document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

var totalAmount = "0,00"

function ready(){
  const removeProductButtons = document.getElementsByClassName("remove-product-button")
  for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", removeProduct)
  }

  const quantityInputs = document.getElementsByClassName("product-qtd-input")
  for(var i = 0; i < quantityInputs.length;i++){
    quantityInputs[i].addEventListener("change", checkIfInputNull)
  }

    addCart()

  const compraButton = document.getElementsByClassName("purchase-button")[0]
  compraButton.addEventListener("click", makePurchase)


}



function makePurchase(){
  if(totalAmount === "0,00"){
    alert("Seu carrinho está vazio!!")
  } else {
    alert(
      `
    Obrigado pela compra!!
    Volte sempre!!
    `
    )
  }

  document.querySelector(".cart-table tbody").innerHTML = ""
  localStorage.clear()

  updateTotal()
}

function checkIfInputNull(event){
  console.log(event.target)
  if (event.target.value === "0"){
    event.target.parentElement.parentElement.remove()
  }

  updateTotal()
}

function removeProduct(event){
  event.target.parentElement.parentElement.remove()

  localStorage.clear()
  updateTotal()
}

function updateTotal(){
totalAmount = 0
const cartProducts = document.getElementsByClassName("cart-product")
for (var i = 0; i < cartProducts.length; i++) {
  // console.log(cartProducts[i])
  const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
  const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value

  totalAmount += productPrice * productQuantity
}
totalAmount = totalAmount.toFixed(2)
totalAmount = totalAmount.replace(".", ",")
document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
}

function addCart(){

  const listCart = JSON.parse(localStorage.getItem('listCart'))

  for(var i = 0; i < listCart.length; i++){
  const productImage = listCart[i][0]
  const productTitle = listCart[i][1]
  const productPrice = listCart[i][2]

  let newCartProduct = document.createElement("tr")
  newCartProduct.classList.add("cart-product")

  newCartProduct.innerHTML = 
  `
  <td class="product-identification">
              <img  class="cart-product-image" src="${(productImage)}" alt="${(productTitle)}">
              <strong class="cart-product-title">${(productTitle)}</strong>
            </td>
            <td>
              <span class="cart-product-price">${(productPrice)}</span>
            </td>
            <td>
              <input class="product-qtd-input" type="number" value="1" min="0">
              <button class="remove-product-button" type="button">Remover</button>
            </td>
  `

  const tableBody = document.querySelector(".cart-table tbody")
  tableBody.append(newCartProduct)

  updateTotal()
  newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputNull)
  newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
  }
}

