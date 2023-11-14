//funcion para sumar dos numero
function sumar(n1,n2){
    //se clacula el resultado de ambos numeros 
    var resultado=n1+n2;
    // esta obteniendo el elemento con el ID "resultado" del documento HTML
    var res=document.getElementById("resultado")
    //verifica si ambos numeros son diferentes a 0
    if(n1!=0 && n2!=0){
        //en caso de que cumpla la condicion se muestra el resultado y se ajusta el estilo de color verde
        respuesta.style.display="block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color="green";
//y si no cumple la condicion se muestra un mensaje de error en este caso se imorime un mensaje"verifique sus datos" y se ajusta el estilo de color rojo
}else{
    respuesta.style.display="block";
    res.innerHTML = `verifique sus datos`;
    res.style.color="red";
}
}
//funcion para restar con 2 numeros 
function restar(n1,n2){
//se clacula el resultado de ambos numeros 
var resultado=n1-n2;
//esta obteniendo el elemento con el ID "resultado" del documento HTML
var res=document.getElementById("resultado")
//verifica si ambos numeros son diferentes a 0
if(n1!=0 && n2!=0){
//si cumple la condicion se muestra el resultado y se ajusta el estilo de color verde
    respuesta.style.display="block";
    res.innerHTML = `total: ${resultado}`;
    res.style.color="green";
}
//si no cumple la condicion se muestra un mensaje de error en este caso se imorime un mensaje"verifique sus datos" y se ajusta el estilo de color rojo
else{
respuesta.style.display="block";
res.innerHTML = `verifique sus datos`;
res.style.color="red";
}}
//funcion para multiplicar 2 numeros 
function multiplicar(n1,n2){
//se clacula el resultado de ambos numeros 
var resultado=n1*n2;
//esta obteniendo el elemento con el ID "resultado" del documento HTML
var res=document.getElementById("resultado")
//verifica si ambos numeros son diferentes a 0
if(n1!=0 && n2!=0){
//si cumple la condicion se muestra el resultado y se ajusta el estilo de color verde
    respuesta.style.display="block";
    res.innerHTML = `total: ${resultado}`;
    res.style.color="green";
//en caso de que no cumpla la condicion se muestra un mensaje de error en este caso se imorime un mensaje"verifique sus datos" y se ajusta el estilo de color rojo
}else{
respuesta.style.display="block";
res.innerHTML = `verifique sus datos`;
res.style.color="red";
}}
//funcion para dividir 2 numeros 
function dividir(n1,n2){
//se clacula el resultado de ambos numeros 
var resultado=n1/n2;
//esta obteniendo el elemento con el ID "resultado" del documento HTML
var res=document.getElementById("resultado")
//verifica si ambos numeros son diferentes a 0
if(n1!=0 && n2!=0){
//si cumple la condicon se muestra el resultado y se ajusta el estilo de color verde
    respuesta.style.display="block";
    res.innerHTML = `total: ${resultado}`;
    res.style.color="green";
//si no cumple la condicion se muestra un mensaje de error en este caso se imorime un mensaje"verifique sus datos" y se ajusta el estilo de color rojo
}else{
respuesta.style.display="block";
res.innerHTML = `verifique sus datos`;
res.style.color="red";
}}
//funcion que calcula la potencia de un numero 
function potencia(n1){
//calcula el resultado elevado al cuadrado
var resultado=n1*n1;
//esta obteniendo el elemento con el ID "resultado" del documento HTML
var res=document.getElementById("resultado")
//verifica si el numero n1 es diferente a 0
if(n1!=0 && n1!=0){
//si cumple la condicion se muestra el resultado y se ajusta el estilo de color verde
    respuesta.style.display="block";
    res.innerHTML = `total: ${resultado}`;
    res.style.color="green";
//en caso de que no cumpla la condicion se muestra un mensaje de error en este caso se imorime un mensaje"verifique sus datos" y se ajusta el estilo de color rojo
}else{
respuesta.style.display="block";
res.innerHTML = `verifique sus datos`;
res.style.color="red";
}}
//funcion principal que se ejecuta cuando se desea realizar una operacion
function mostrar(){
//obtiene los valores ingresados por el usuario desde la pagina
let n1=parseInt(document.getElementById("n1").value);
let n2=parseInt(document.getElementById("n2").value);
let opc=parseInt(document.getElementById("opc").value);
//un switch permite ejecutar diferentes acciones segun el valor de una variable
//utiliza un switch para determinar la operacion segun la opcion seleccionada
switch(opc){
//si la opciOn es 1 llama a la funcion sumar
    case 1:
        sumar(n1,n2)
        break;
 //si la opcion es 2  llama a la funcion restar
    case 2:
        restar(n1,n2)
        break;
//si la opcion es 3 llama a la funcion multiplicar
    case 3:
        multiplicar(n1,n2)
        break;
//si la opcion es 4 llama a la funcion dividir
    case 4:
        dividir(n1,n2)
        break;
//si la opcion es 5 llama a la funcion potencia
    case 5:
        potencia(n1)
        break;
    default:
 //si la opcion no es ninguna de las anteriores se muestra una alerta y se imprime un mensaje "la opcion no es valida"
        alert("la opcion no es valida")
}
}
