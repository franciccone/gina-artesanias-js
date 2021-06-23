// // PRIMERA ENTREGA DEL PROYECTO FINAL

// // Defino la función 'add'

// function add(num1, num2) {

//     let add = num1 + num2;
//     return add

// }

// // Defino 'precio' y 'lugar' con prompts para pedírselos al usuario

// let cost = Number(prompt("Ingrese el valor total de los productos adquiridos."))
// let place = prompt("Ingrese su provincia de residencia para calcular el envío.")

// // Defino la función 'shipping' para calcular el envío correspondiente, aviso por console.log y luego llamo a la función

// function shipping() {
//     let total = 0

//     if (place != "" && (place === "CABA" || place === "Ciudad de Buenos Aires" || place === "Capital" || place === "Capital Federal" || place === "caba" || place === "ciudad de buenos aires" || place === "capital" || place === "capital federal")) {
//         total = add(cost, 0);
//         console.log("El envío de su pedido es gratuito. El valor total es de $" + total + ".")
//     } else if (place != "" && (place === "Buenos Aires" || place === "Provincia de Buenos Aires" || place === "Bs As" || place === "BsAs" || place === "buenos aires" || place === "provincia de buenos aires" || place === "bs as" || place === "bsas")) {
//         total = add(cost, 250);
//         console.log("El envío de su pedido es de $250. El valor total es de $" + total + ".")
//     } else {
//         total = add(cost, 500);
//         console.log("El envío de su pedido es de $500. El valor total es de $" + total + ".")
//     }
// }

// // Salida

// shipping()

// ----------------------------------

// DESAFÍO DE OBJETOS Y ARRAYS

// Defino el array 'cart' vacío y luego creo la clase 'Producto', con funciones dentro

// let cart = []

// class Producto {
//     constructor(id, title, price, stock) {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.stock = stock;
//     }

//     getId = function() {
//         return this.id;
//     }

//     getTotal = function(qty) {
//         return this.price * qty;
//     }

//     getBuy = function(qty) {
//         return {
//             product: this,
//             quantity: qty,
//             cash: this.getTotal(qty),
//         }
//     }

//     addToCart = function (qty) {
//         cart.push(this.getBuy(qty))
//     }
// }

// // Creo los objetos personalizados

// const crochetOsito = new Producto(1, 'Osito de crochet', 600, 3)
// const crochetRatoncitos = new Producto(2, 'Ratoncitos de crochet', 600, 5)
// const crochetAnimalitos = new Producto(3, 'Animalitos ficticios de crochet', 600, 2)
// const accesorioLlama = new Producto(4, 'Accesorio para celular de llama', 300, 8)
// const accesorioPajaros = new Producto(5, 'Accesorio para celular de pájaros', 300, 7)
// const cuadroLlama = new Producto(6, 'Cuadro de llama', 1200, 2)
// const cuadroBulldog = new Producto(7, 'Cuadro de bulldog', 1200, 4)
// const cuadroCierva = new Producto(8, 'Cuadro de cierva', 1200, 2)
// const apegoGatitos = new Producto(9, 'Muñecos de apego de gatitos', 900, 10)
// const apegoOsitos = new Producto(10, 'Muñecos de apego de ositos', 900, 10)
// const apegoConejitos = new Producto(11, 'Muñecos de apego de conejitos', 900, 10)

// Salida, agregando productos al carrito

// crochetOsito.addToCart(1)
// apegoGatitos.addToCart(10)
// cuadroLlama.addToCart(2)
// console.log(cart)

// SELECCIONO LOS BOTONES CON UNA VARIABLE GLOBAL

const addToShoppingCartButtons = document.querySelectorAll('.cta');

// LE SEÑALO A JS DÓNDE VOY A METER TODO LO QUE HAGA EN EL HTML CON UNA VARIABLE GLOBAL

const shoppingCartItemsContainer = document.querySelector('.shopping-cart')

// MÉTODO FOR EACH CON ARROW FUNCTION PARA QUE EN CADA BOTÓN SUCEDA ALGO, UN EVENTO CLICK

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

// CREO LA FUNCIÓN addToCartClicked CON UN EVENT COMO PARÁMETRO; ADEMÁS AÑADO VARIABLES PARA TOMAR LOS DATOS DE LOS PRODUCTOS DEL HTML

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.products');

    const itemTitle = item.querySelector('.title-products').textContent;
    const itemPrice = item.querySelector('.price-products').textContent;
    const itemImg = item.querySelector('.pic-products').src;

    addItemToShopCart(itemTitle, itemPrice, itemImg);
}

// CREO EL DIV DONDE VAN A ESTAR LOS PRODUCTOS ELEGIDOS POR EL USUARIO Y CREO LOS ELEMENTOS CON TEMPLATE LITERALS

function addItemToShopCart(itemTitle, itemPrice, itemImg) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row products">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImg} class="pic-products">
                <h6 class="title-products shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="price-products mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);
}