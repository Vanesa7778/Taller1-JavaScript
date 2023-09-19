nacimiento=parseInt(prompt("ingresa tu año de nacimiento"))
//console.log(typeof(nacimiento));
//var nacimiento=1980;
const fecha= new Date();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-nacimiento;
//concatenar permite unir caracteres
//comentarios

//document.write("Bienvenido señor "+nombre+" Usted tiene "+edad +"años")
var nombres=prompt("Ingrese tu nombre");
//var Edad=parseInt(prompt("Ingrese la edad"));
//console.log(typeof(nombres)) //ver el tipo de dato de la variable

//document.write("Bienvenido señor(a) "+nombres+" usted tiene "+edad+" años de edad")

//if(edad<=18){
 //     document.write("Bienvenido joven "+nombres+" usted tiene "+edad+"años de edad y es menor de edad")
//}else{
    //document.write("Bienvenido señor(a)"+nombres+" usted tiene "+edad+"años de edad y es mayor de edad")
//}

if(edad<=8){
    document.write("Bienvenido niño(a) "+nombres+" usted tiene "+edad+" años de edad y es menor de edad")
}else if(edad<=17){
    document.write("Bienvenido joven "+nombres+" usted tiene " +edad+ " años de edad y es menor de edad")
}else{
    document.write("Bienvenido señor(a) "+nombres+" usted tiene " +edad+ " años de edad y es mayor de edad")
}
