//se crea una funcion llamada pedido 
function pedido() {
//se obtiene el tipo de plato seleccionado del lugar donde se elige el plato con el nombre "tipoPlato" en la pagina web
    var tipoPlato = document.getElementById("tipoPlato").value;
//se obtiene la cantidad de platos ingresada y convertirla a un numero entero
    var cantidadPlatos = parseInt(document.getElementById("cantidadPlatos").value);
//se obtiene el tipo de bebida seleccionado del elemento con ID "bebida" en el documento HTML
    var tipoBebida = document.getElementById("bebida").value;
//Obteniene la cantidad de bebidas ingresada y convertirla a un numero entero
    var cantidadBebidas = parseInt(document.getElementById("cantidadBebidas").value);
//se definen los precios de cada tipo de plato en un objeto
    var precioPlatos = {
        "Hamburguesa": 20000,
        "Salchipapa": 30000,
        "Perro Caliente": 12000
    };
//se definen los precios de cada bedida en un objeto
    var precioBebida = {
        "Coca Cola":4500,
        "Jugos Hit":3500,
        "Limonada":2000
    };
//se calcula  el total de los platos seleccionados multiplicando el precio por la cantidad
    var totalPlatos = precioPlatos[tipoPlato] * cantidadPlatos;
//se calcula el total de las bebidas seleccionadas multiplicando el precio por la cantidad
    var totalBebidas = precioBebida * cantidadBebidas;
//se calcula el total  sumando el total de platos y el total de bebidas
    var total = totalPlatos + totalBebidas;
//sse muestra el resultado en el  HTML indicando el total a pagar
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Total a pagar: $" + total;
}

