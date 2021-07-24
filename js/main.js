// SELECCIONO LOS BOTONES QUE TIENEN LA CLASE .cta CON UNA VARIABLE GLOBAL

const addToShoppingCartButtons = document.querySelectorAll('.cta');

// LE SEÑALO A JS DÓNDE VOY A METER TODO LO QUE HAGA EN EL HTML CON UNA VARIABLE GLOBAL

const shoppingCartItemsContainer = document.querySelector('.shopping-cart')

// MÉTODO FOR EACH CON ARROW FUNCTION PARA QUE EN CADA BOTÓN SUCEDA ALGO, EN ESTE CASO UN EVENTO 'click'

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

// SELECCIONO EL BOTÓN COMPRAR Y LE AGREGO UN EVENTO PARA QUE APAREZCA UN MODAL DE BOOTSTRAP AVISÁNDOLE AL USUARIO QUE LA TRANSACCIÓN FUE EXITOSA

const buyButton = document.querySelector('.buyButton');
buyButton.addEventListener('click', buyButtonClicked)

// CREO LA FUNCIÓN addToCartClicked CON UN EVENT COMO PARÁMETRO; ADEMÁS AÑADO VARIABLES PARA TOMAR LOS DATOS DE LOS PRODUCTOS DEL HTML SEGÚN LAS CLASES

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

    // Recorro todos los títulos de los productos con la clase .shoppingCartItemTitle

    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');

    // Acá uso jQuery dentro del for para que no se repitan los productos y aparece un toast de Bootstrap que avisa que se agregó correctamente el producto

    for(let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) { // Con este if compruebo si el elementsTitle que itero (en la posición i) es igual al itemTitle
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');  // Selecciono el input del elementsTitle que aparece en el div creado, subiendo tres veces de parent para traer el elemento con clase .shoppingCartItemQuantity
            elementQuantity.value++; // Sumo el valor del elementQuantity cuando es el mismo elemento
            $('.toast').toast('show'); // Aparece el toast que le avisa al usuario que el producto se agregó correctamente
            updateShoppingCartTotal(); // Llamo a esta función para que se actualice el número del total
            return; // Si el producto es el mismo, suma -aumentando la cantidad- pero deja de ejecutarse el código y sale de la función
        }
    }

    // Creo el div

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row products shoppingCartItem">
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
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

shoppingCartRow.innerHTML = shoppingCartContent; // Meto el elemento shoppingCartContent que cree recién en la variable que hice antes (shoppingCartRow) a través de un innerHTML
shoppingCartItemsContainer.append(shoppingCartRow); // Con un append incluyo el shoppingCartRow en el HTML

shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem); // Selecciono los botones de borrar, les agrego un evento 'click' y creo una función para que se borre el producto (ver debajo)

shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged); // Selecciono los elementos con la clase .shoppingCartItemQuantity, les agrego un evento 'change' y creo una función para que se actualice la cantidad del producto (ver debajo)

updateShoppingCartTotal();
}

// FUNCIÓN PARA SUMAR EL TOTAL DEL CARRITO

function updateShoppingCartTotal() {
    let total = 0;  // Empieza con un valor de 0 para ir actualizándose a medida que se añaden productos
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal'); // Selecciono el total del carrito para hacer las operaciones

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem'); // Selecciono todos los elementos con la clase shoppingCartItem

    // Por cada shoppingCartItems hago algo para, finalmente, operar
    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice'); // Variable para seleccionar el precio del elemento
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$','' )); // Variable para transformar el precio, que está como string en el HTML, en un número. Además quito el sigo $ con un replace a un string vacío
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity'); // Variable para seleccionar la cantidad del elemento
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value); // Variable transformar la cantidad de string a number
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity; // Operación para calcular el total
    });

    shoppingCartTotal.innerHTML = `${total.toFixed(2)}`; // Muestro el total en el HTML con un innerHTML. Con el toFixed ajusto la cantidad de decimales a sólo 2
}

// FUNCIÓN PARA BORRAR UN ELEMENTO DEL CARRITO

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

// FUNCIÓN PARA CAMBIAR LA CANTIDAD DE UN MISMO ELEMENTO EN EL CARRITO, EVITANDO TAMBIÉN QUE LA CANTIDAD SEA NEGATIVA

function quantityChanged(event) {
    const input = event.target;
    if (input.value <= 0) {
        input.value = 1;
    }
    updateShoppingCartTotal();
}

// FUNCIÓN PARA QUE SE BORRE EL CONTENIDO DEL CARRITO CUANDO EL USUARIO FINALIZA LA COMPRA

function buyButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
}