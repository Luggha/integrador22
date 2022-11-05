let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let categoria = document.getElementById('select-categoria');


let validacion = [];
let totalAPagar;

function cleanUp(){
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value ="";
    categoria.value = "elegir categoria";
    document.getElementById('completarnombre').innerHTML = '';
    document.getElementById('completarapellido').innerHTML = '';
    document.getElementById('completaremail').innerHTML = '';
    document.getElementById('completarcantidad').innerHTML = '';
    document.getElementById('completarcategoria').innerHTML = '';
    document.getElementById('totalpagar').innerHTML = 'Total a pagar = $';
}

function dataInput(){

    validateDate();
    if (validateDate() == true){
        calcular ();
    }

}

function validateDate(){
    categoria = document.getElementById('select-categoria')
    categValue = categoria.value;
    
    if (nombre.value == ''){
        document.getElementById('completarnombre').innerHTML = '*Campo obligatorio'
        validacion[0] = false;
    }else{
        document.getElementById('completarnombre').innerHTML = ''
        validacion[0] = true
    }

    if (apellido.value == ''){
        document.getElementById('completarapellido').innerHTML = '*Campo obligatorio';
        validacion[1] = false;
    }else{
        document.getElementById('completarapellido').innerHTML = ''
        validacion[1] = true;
    }

    if (email.value == ''){
        document.getElementById('completaremail').innerHTML = '*Campo obligatorio'
        validacion[2] = false;
    }else{
        document.getElementById('completaremail').innerHTML = ''
        validacion[2] = true;
    }

    if (cantidad.value < 1) {
        document.getElementById('completarcantidad').innerHTML = '*La cantidad debe ser indicada en números';
        validacion[3] = false;
    }else {
        document.getElementById('completarcantidad').innerHTML = ''
        let cantidadInt = Math.trunc(Number(cantidad.value));
        cantidad.value = cantidadInt
        validacion[3] = true
    }
    
    if (categoria.value == "elegir categoria") {
        document.getElementById('completarcategoria').innerHTML = '*Elegir categoria';
        validacion[4] = false;
    }else {
        document.getElementById('completarcategoria').innerHTML = ''
        validacion[4] = true;
    }
    
    if (validacion[0] == true & validacion[1] == true & validacion[2] == true & validacion[3] == true & validacion[4] == true){
        return true
    }else{
        document.getElementById('totalpagar').innerHTML = 'Total a pagar = $'
    }
}

function calcular (){
    switch (categoria.value){
        case 'estudiante':
            document.getElementById('totalpagar').innerHTML = 'Total a pagar = $' + 200*0.2*cantidad.value
            break
        case 'trainee':
            document.getElementById('totalpagar').innerHTML = 'Total a pagar = $' + 200*0.5*cantidad.value
            break
        case 'junior':
            document.getElementById('totalpagar').innerHTML = 'Total a pagar = $' + 200*0.85*cantidad.value
            break
        case 'publico':
            document.getElementById('totalpagar').innerHTML = 'Total a pagar = $' + 200*cantidad.value
            break
    }
}