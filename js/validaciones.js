/*
const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (event) => {
    validarNacimiento(event.target);
});
*/
export function valida(input){
    const tipoDeinput = input.dataset.tipo;
    if(validadores[tipoDeinput]){
        validadores[tipoDeinput](input);
    }

if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
} else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeinput, input);
    }
};

const tipoDeErrorres = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo  nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y almenos un caracter especial"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener almenos 18 años de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 numeros"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres"
    }
};


const validadores = {
    nacimiento: input => validarNacimiento(input)
};

function mostrarMensajeDeError(tipoDeinput, input){
    let mensaje = " ";
    tipoDeErrorres.forEach((error) => {
        if(input.validity[error]){
            console.log(tipoDeinput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeinput][error]);
            mensaje = mensajesDeError[tipoDeinput][error];
        }
    });

    return mensaje;
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener almenos 18 años de edad";
    };
    input.setCustomValidity(mensaje);
}

function mayorDeEdad (fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;
}