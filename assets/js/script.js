
const desplazamiento = 3;
window.addEventListener("load", inicio, true);
function inicio(){
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        document.getElementById("mensaje2").value = cifrar(texto);
        localStorage.setItem("contra", document.getElementById("contra").value);
    }, true);

    document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let contrasena = localStorage.getItem("contra");
        if (contrasena == document.getElementById("contra").value){
            document.getElementById("mensaje2").value = descifrar(texto);
        }
        else {
            alert("Contraseña Incorrecta")
        }
    }, true);
}

function cifrar(texto){
    let resultado = "";
    let letras = "abcdefghijklmnopqrstuvwxyz"

    desplazarDer = desplazamiento;
    //desplazamiento = 3;

    if(texto){
        for(let i = 0; i<texto.lenght;i++){
            if(letras.indexOf(texto [i])!= -1){
                let posicion = ((letras.indexOf(texto [i])+desplazamiento)%26);
            }
            else{
                resultado = resultado + texto[i];
            }
        }
    }
    
    return resultado;
}

function descifrar(texto){
    let resultado = "";
    let letras = "abcdefghijklmnopqrstuvwxyz";

    let desplazarIzq = (desplazamiento * -1) + 26;

    if(texto){
        for(let i = 0; i<texto.lenght; i++){
            if(letras.indexOf(texto[i])!= -1){
                let posicion = ((letras.indexOf(texto[i])+desplazarIzq)%26);
                resultado = resultado + letras[posicion];
            }
            else{
                resultado = resultado + texto[i];
            }
        }
    }

    return resultado;
}
