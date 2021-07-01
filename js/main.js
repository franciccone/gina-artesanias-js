
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
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);

shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

updateShoppingCartTotal.setItem();
}

// FUNCIÓN PARA SUMAR EL TOTAL DEL CARRITO

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal')

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')

    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$','' ));
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    })

    shoppingCartTotal.innerHTML = `${total.toFixed(2)}`;
}

// FUNCIÓN PARA BORRAR UN ELEMENTO DEL CARRITO

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

// FUNCIÓN PARA CAMBIAR LA CANTIDAD DE UN MISMO ELEMENTO EN EL CARRITO

function quantityChanged(event) {
    const input = event.target;
    if (input.value <= 0) {
        input.value = 1;
    }
    updateShoppingCartTotal();
}