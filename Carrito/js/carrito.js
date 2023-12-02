// se grega evento de escucha para teclas presionadas del libro 1
window.addEventListener("keydown", (e) => {
    if (e.key === "+") {// se verifica si la tecla presionada es el signo ('+')
        aumentarCantidad('libro1');//si es '+' aumenta la cantidad del libro 1
    } else if (e.key === "-") {
        disminuirCantidad('libro1');//si es '-' disminuye la cantidad del libro 1
    }
});

//se agrega evento de escucha para teclas presionadas del libro 2
window.addEventListener("keydown", (e) => {
    if (e.key === "+") {// se verifica si la tecla presionada es el signo ('+')
        aumentarCantidad('libro2');//si es '+', aumenta la cantidad del libro 2
    } else if (e.key === "-") {
        disminuirCantidad('libro2');//si es '-' disminuye la cantidad del libro 2
    }
});
//estas variables almacenan la cantidad y precios de los libros
let cantidadLibro1 = 0;//inicializa la cantidad del libro 1 en 0
let cantidadLibro2 = 0;//inicializa la cantidad del libro 2 en 0
let precioLibro1 = 100000; //se define el precio de libro 1
let precioLibro2 = 150000; //se define precio de libro 2

//se declara una const libros para que los valores no cambien y contenga la informacio de nombre,precio y cantidad 
const libros = {
    libro1: { nombre: 'Balada de pajaros cantores y serpientes', precio: precioLibro1, cantidad: cantidadLibro1 },
    libro2: { nombre: 'Los juegos del hambre', precio: precioLibro2, cantidad: cantidadLibro2 }
};


//funcion para actualizar la cantidad visualmente en la pagina
function actualizarCantidad(libro, cantidad) {
//el document.getElementById busca al elemento HTML que muestra la cantidad del libro y actualiza su contenido
    document.getElementById(libro + 'Cantidad').innerText = cantidad;
} 
//funcion para aumentar la cantidad del libro
function aumentarCantidad(libro) {//se verifica si el libro existe en el objeto de libros que const libros
    if (libros.hasOwnProperty(libro)) { //hasOwnProperty verifica si el objeto libros tiene la propiedad correspondiente al nombre del libro como argumento en la funcion 
        libros[libro].cantidad++;//Incrementa la cantidad del libro en 1
        actualizarCantidad(libro, libros[libro].cantidad);//se llama a la funcion para actualizar la cantidad visualmente en la pagina
        actualizarLista();
    }
}

//funcion para disminuir la cantidad del libro
function disminuirCantidad(libro) {
    if (libros.hasOwnProperty(libro) && libros[libro].cantidad > 0) {//el hasOwnProperty verifica si hay existencias del libro y si la cantidad no es cero
        libros[libro].cantidad--;//reduce la cantidad del libro
        actualizarCantidad(libro, libros[libro].cantidad);//se actualiza la cantidad visualmente en la pagina
        actualizarLista();//actualiza la lista de libros y el valor total
    }
}

//funcion para actualizar la lista de libros y el valor total
function actualizarLista() {
    const lista = document.getElementById('listaCompra');//va a buscar el elemento de  HTML de la lista de compra

    //con las '' limpia la lista antes de actualizarla
    lista.innerHTML = '';

    //se define una variable para almacenar el total de la compra
    let valorTotal = 0;

    //se va actualizar la lista con los libros y precios
    for (const libro in libros) {// el for  va a iterar sobre cada propiedad libro del objeto 'libros'
        if (libros.hasOwnProperty(libro) && libros[libro].cantidad > 0) {//va a verifica si el libro es una propiedad de  objeto 'libros' y si su cantidad es mayor que cero
    
    //se va a extraer informacion especifica del libro utilizando desestructuracion que significa que tomara las propiedades de un objeto y va asignarlas directamente a variables      
            const { nombre, precio, cantidad } = libros[libro];
            agregarElementoLista(libro, nombre, precio, cantidad);//se va a agrega un elemento a la lista de compra con la informacion de los libros

    //se multiplica el precio del libro por la cantidad de ese libro y luego suma ese resultado al total de la compra
            valorTotal += precio * cantidad;
        }
    }

    //va actualizar el valor total
    actualizarValorTotal(valorTotal);
}

//funcion para agregar un elemento a la lista con la informacion del libro
function agregarElementoLista(libro, nombre, precioUnitario, cantidad) {//va a obtener el elemento HTML con el id 'listaCompra' y lo va a almacenar en la variable 'lista'
    const lista = document.getElementById('listaCompra');//va a buscar el elemento de  HTML de la lista de compra
//se va a calcular el precio total del libro multiplicando el precio unitario por la cantidad
    const precioTotal = precioUnitario * cantidad;
//se crea un nuevo elemento de lista ('li') en el documento HTML
    const elementoLista = document.createElement('li');
//se va a establecer el contenido HTML del elemento de lista con informacion sobre el libro y su precio total
    elementoLista.innerHTML = `${cantidad} ${nombre} - $${precioTotal}`;
//se va a gregar el elemento de lista al final de la lista de compra en el documento HTML
    lista.appendChild(elementoLista);
}

//funcion para actualizar el valor total de la compra
function actualizarValorTotal(valorTotal) {//va a obtener el elemento HTML con el id 'total' y se va a actualizar su texto con el nuevo valor total de la compra
    document.getElementById('total').innerText = valorTotal;
}

// funcion para generar el total de la compra y agregarlo debajo del boton
function generarTotalCompra() {
    const totalCompra = document.getElementById('total').innerText;

    //se elimina cualquier contenido anterior debajo del boton
    const botonTotalCompra = document.getElementById('botonTotalCompra');
    const contenidoAnterior = botonTotalCompra.nextSibling;

    if (contenidoAnterior && contenidoAnterior.nodeName === 'P') {
        contenidoAnterior.remove();
    }

    //se crea un nuevo elemento de parrafo con el total de la compra
    const totalCompraElement = document.createElement('p');
    totalCompraElement.innerText = `Total de la Compra: $${totalCompra}`;

    // Insertar el nuevo elemento antes del boton
    botonTotalCompra.parentNode.insertBefore(totalCompraElement, botonTotalCompra.nextSibling);
}


//va a obtiener la referencia del  elemento del boton mediante su id "botonTotalCompra"
const botonTotalCompra = document.getElementById('botonTotalCompra');
//se agrega evento de escucha al boton para generar el total de la compra
botonTotalCompra.addEventListener('click', generarTotalCompra);
//cuando se haga  clic en el boton este va a  activar la funcion generarTotalCompra
