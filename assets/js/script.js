
const desplazamiento = 3;
window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup",function(){
        this.value = this.value.toUpperCase();
    },true);

    document.getElementById("cifrar").addEventListener("click",function(){
        let texto = document.getElementById("mensaje2").value = cifrar(texto);
        localStorage.setItem("contra",document.getElementById("contra").value);
    },true);

    document.getElementById("descifrar").addEventListener("click",function(){
        let texto = document.getElementById("mensaje").value;

        let contraseña = localStorage.getItem("contra");
        if(contraseña == document.getElementById("contra").value){
            document.getElementById("mensaje2").value = descifrar(texto);
        }
        else{
            alert("CONTRASEÑA INCORRECTA");
        }
    },true);
}

function cifrar(texto){
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazarDer = desplazamiento;
    //desplazamiento = 3;

    if(texto){
        for(let i=0;i<texto.lenght;i++){
            if(letras.indexOf(texto[i])!=-1){
                let posicion = ((letras.indexOf(texto[i])+desplazamiento)%26);
                resultado = resultado + letras[posicion];
            }
            else{
                resultado = resultado + texto[i];
            }
        }
    }



    return resultado;
}