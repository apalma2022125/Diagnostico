let valorPantalla ='';

function limpiarPantall(){
    valorPantalla = '';
    actualizarPantalla();
}

function agregarCaracter(char){
    valorPantalla += char;
    actualizarPantalla();
}

function calcular(){

    try {
        valorPantalla = eval(valorPantalla).toString();
        actualizarPantalla();
    } catch (e) {
        valorPantalla = 'Error TONTO';
        actualizarPantalla();
    }
}

function actualizarPantalla(){
    document.getElementById('pantalla').value = valorPantalla;
}