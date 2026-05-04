aleatorios = function(){
    let numeros;
    numeros = Math.floor(Math.random()*100)+1
    return numeros;
}

function generarAleatorios(){
    let misNumeros=[];
    let txtNum = recuperarInt("txtNum");
    if(txtNum >=5 && txtNum <=20){
        mostrarTexto( "mensajeAleatorios","El número ingresado es correcto");
        for(let i = 0; i < txtNum; i++){
            console.log(i)
            let resultado = aleatorios();
            misNumeros.push(resultado)
        }
        mostrarResultados(misNumeros);
    }else{
        mostrarTexto("mensajeAleatorios","El número ingresado no es válido");
    }
}

function mostrarResultados(arregloNumeros){
    let arreglar = "<table>"
    for(let i = 0; i < arregloNumeros.length; i++){
        arreglar += "<tr><td>" + arregloNumeros[i] + "</td></tr>"
    }
    arreglar += "</table>"
    document.getElementById("contenedorTabla").innerHTML = arreglar;
}