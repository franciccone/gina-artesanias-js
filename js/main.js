// Defino la función 'sumar'

function sumar(num1, num2) {

    let suma = num1 + num2;
    return suma

}

// Defino 'precio' y 'lugar' con prompts para pedírselos al usuario

let precio = Number(prompt("Ingrese el valor total de los productos adquiridos."))
let lugar = prompt("Ingrese su provincia de residencia para calcular el envío.")

// Defino la función 'enviar' para calcular el envío correspondiente, avise por alert y luego llamo a la función

function envio() {
    let total = 0

    if (lugar != "" && (lugar === "CABA" || lugar === "Ciudad de Buenos Aires" || lugar === "Capital" || lugar === "Capital Federal" || lugar === "caba" || lugar === "ciudad de buenos aires" || lugar === "capital" || lugar === "capital federal")) {
        total = sumar(precio, 0);
        alert("El envío de su pedido es gratuito. El valor total es de $" + total + ".")
    } else if (lugar != "" && (lugar === "Buenos Aires" || lugar === "Provincia de Buenos Aires" || lugar === "Bs As" || lugar === "BsAs" || lugar === "buenos aires" || lugar === "provincia de buenos aires" || lugar === "bs as" || lugar === "bsas")) {
        total = sumar(precio, 250);
        alert("El envío de su pedido es de $250. El valor total es de $" + total + ".")
    } else {
        total = sumar(precio, 500);
        alert("El envío de su pedido es de $500. El valor total es de $" + total + ".")
    }
}

envio()