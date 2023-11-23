//en este bloque se agrega un evento de escucha para teclas presionadas
window.addEventListener("keydown",(e)=>{
    if (e.key=="+"){//verifica si la tecla presionada es "+"
        incrementar()//llama a la funcion incrementar
    }
    else if (e.key=="-"){//verifica si la tecla presionada es "-"
        decremento()//llama a la funcion decremento
    }
    else if (e.key=="r"){//verifica si la tecla presionada es "r"
        resetear()//llama a la funcion resetear 
    }
})

//se pone let para que la variable contador se pueda modificar 
let contador=0;
const valor=document.getElementById("valor")
//funcion para incrementar en el contador
function incrementar (){
    //alter("incremento")
    contador+=1;//incrementa el contador 
    //localstorage.setItem("valor",contador)
    valor.innerHTML=contador;//se actualiza el valor mostrado en el HTML con el valor del contador
}
//funcion para decremento
function decremento (){
    //alter("decremento")
    if (contador>0){//verifica si el contador es mayor a 0
        contador-=1;//se decrementa el contador 
        valor.innerHTML=contador;
    }else{// se establece el contador a 0
        contador=0;
        valor,innerHTML=contador;
    }

}
//funcion para resetear 
function resetear(){
    //vuelve el contador en 0
    contador=0;
    valor.innerHTML=contador;//se actualiza el valor mostrado en el HTML con el valor del contador
}