// PRIMERA ENTREGA DEL PROYECTO FINAL

// Defino la función 'add'

function add(num1, num2) {

    let add = num1 + num2;
    return add

}

// Defino 'precio' y 'lugar' con prompts para pedírselos al usuario

let cost = Number(prompt("Ingrese el valor total de los productos adquiridos."))
let place = prompt("Ingrese su provincia de residencia para calcular el envío.")

// Defino la función 'shipping' para calcular el envío correspondiente, aviso por console.log y luego llamo a la función

function shipping() {
    let total = 0

    if (place != "" && (place === "CABA" || place === "Ciudad de Buenos Aires" || place === "Capital" || place === "Capital Federal" || place === "caba" || place === "ciudad de buenos aires" || place === "capital" || place === "capital federal")) {
        total = add(cost, 0);
        console.log("El envío de su pedido es gratuito. El valor total es de $" + total + ".")
    } else if (place != "" && (place === "Buenos Aires" || place === "Provincia de Buenos Aires" || place === "Bs As" || place === "BsAs" || place === "buenos aires" || place === "provincia de buenos aires" || place === "bs as" || place === "bsas")) {
        total = add(cost, 250);
        console.log("El envío de su pedido es de $250. El valor total es de $" + total + ".")
    } else {
        total = add(cost, 500);
        console.log("El envío de su pedido es de $500. El valor total es de $" + total + ".")
    }
}

shipping()

// DESAFÍO DE OBJETOS Y ARRAYS

// Defino el array 'cart' y luego creo la clase 'Producto', con funciones dentro

let cart = []

class Producto {
    constructor(id, title, price, stock) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
    }

    // 1°) Retorna el producto
    getId = function() {
        return this.id;
    }

    // 2°) Retorna el precio de cada producto según la cantidad
    getTotal = function(qty) {
        return this.price * qty;
    }

    // 3°) Retorna la ID del producto
    getBuy = function(qty) {
        return {
            product: this,
            quantity: qty,
            cash: this.getTotal(qty),
        }
    }

    // 4°) Retorna la ID del producto
    addToCart = function (qty) {
        cart.push(this.getBuy(qty))
    }
}

// Creo los objetos personalizados

const crochetOsito = new Producto(1, 'Osito de crochet', 600, 3)
const crochetRatoncitos = new Producto(2, 'Ratoncitos de crochet', 600, 5)
const crochetAnimalitos = new Producto(3, 'Animalitos ficticios de crochet', 600, 2)
const accesorioLlama = new Producto(4, 'Accesorio para celular de llama', 300, 8)
const accesorioPajaros = new Producto(5, 'Accesorio para celular de pájaros', 300, 7)
const cuadroLlama = new Producto(6, 'Cuadro de llama', 1200, 2)
const cuadroBulldog = new Producto(7, 'Cuadro de bulldog', 1200, 4)
const cuadroCierva = new Producto(8, 'Cuadro de cierva', 1200, 2)
const apegoGatitos = new Producto(9, 'Muñecos de apego de gatitos', 900, 10)
const apegoOsitos = new Producto(10, 'Muñecos de apego de ositos', 900, 10)
const apegoConejitos = new Producto(11, 'Muñecos de apego de conejitos', 900, 10)

// Salida

crochetOsito.addToCart(1)
apegoGatitos.addToCart(10)
cuadroLlama.addToCart(2)
console.log(cart)