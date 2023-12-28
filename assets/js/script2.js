let codificar = document.querySelector('#cifrar');
let decodificar = document.querySelector('#descifrar');
let output = document.querySelector('textarea');

codificar.addEventListener('click', () =>{
    output.value = btoa(output.value) ;
});

decodificar.addEventListener('click', () =>{
    output.value = atob(output.value) ;
});