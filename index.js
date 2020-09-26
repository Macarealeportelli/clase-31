const cards = document.querySelectorAll('.card');
const botonesFiltro = document.querySelectorAll('.filtro-boton');
const filtroSexo = document.querySelectorAll("input[type='radio']");
const filtroBusqueda = document.querySelector('#filtro-nombre');
const filtroColor = document.querySelectorAll("input[type='checkbox']");

// for (let radio of filtroSexo) {
//   radio.oninput = () => {
//     for (let card of cards) {
//       card.classList.add('hidden');
//       if (radio.checked) {
//         if (radio.value === card.dataset.sexo) {
//           card.classList.remove('hidden');
//         }
//         if (radio.value === 'i') {
//           card.classList.remove('hidden');
//         }
//       }
//     }
//   };
// }


// filtroBusqueda.oninput = () => {
//   for (let card of cards) {
//     const busquedaUsuarioEnMinusculas = filtroBusqueda.value.toLowerCase();
//     if (card.dataset.nombre.includes(busquedaUsuarioEnMinusculas)) {
//       card.classList.remove('hidden');
//     } else {
//       card.classList.add('hidden');
//     }
//   }
// };


// for (let checkbox of filtroColor) {
//   checkbox.oninput = () => {
//     for (let card of cards) {
//       card.classList.add('hidden');
//       for (let filtro2 of filtroColor) {
//         if (filtro2.checked) {
//           if (filtro2.value === card.dataset.color) {
//             card.classList.remove('hidden');
//           }
//           else if (filtro2.value === "todos") {
//             card.classList.remove('hidden')
//           }
//         }
//       }
//     }
//   };
// }

//chequea si hay algun checbox chequeado
const hayAlgunCheckBoxChequeado = () => {
    for (checkbox of filtroColor) {
        if (checkbox.checked) {
            return true
        }
    }
    return false
}

// chequeamos si los checkbox coinciden con alguna tarjeta
const comparoColorEnLaTarjeta = (card) => {
   
    if (card.dataset.color === checkbox.value){
        return true
    }
    else {
        return false
    }
}


//chequea si hay algun radio chequeado
const hayAlgunRadioChequeado = () => {
    for (radio of filtroSexo) {
        if (radio.checked) {
            return true
        }
    }
    return false
}


// chequeamos que el valor del radio coincida con la tarjeta
const comparoSexoConLaTarjeta = (card) =>{
    if (card.dataset.sexo === radio.value){
        return true
    }
    else {
        return false
    }
}






//chequea si hay algo escrito en el input
const hayAlgoEscritoEnElInput = () => {
    if (filtroBusqueda.value) {
        return true
    }
    else {
        return false
    }
}

//chequea si las tarjetas coinciden con el input
const compararInputConTarjeta = (card) => {
    if (card.dataset.nombre.includes(filtroBusqueda.value)) {
        return true
    }
    else {
        return false
    }
}



const pasaFiltros = (card) => {
    //me fijo si hay algo escrito en el input
    // si hay algo escrito reviso que coincida con el nombre de la tarjeta
    // si coincide retorna true
    // si no cincide retorna false


    // if (hayAlgoEscritoEnElInput()) {
    //     if (compararInputConTarjeta()) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }
    // else {
    //     return true
    // }

// me fijo si hay algo chequeado en los checkbox
// si lo hay, me fijo que checkbox está chequeado
// si el radio chequeado coinciden con el color de alguna tarjeta
// retorno true, sino retorno false

    // if (hayAlgunCheckBoxChequeado()){
    //     if (comparoColorEnLaTarjeta(card)){
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }
    // else {
    //     return true
    // }

// me fijo si hay algo chequeado en los radio
// si lo hay, me fijo que radio está chequeado
// si el radio chequeado coinciden con el sexo de alguna tarjeta
// retorno true, sino retorno false

    if (hayAlgunRadioChequeado()){
        if (comparoSexoConLaTarjeta(card)){
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }






}






// pasaFiltros -> param card -> return true o false 
// revisar si hay algo escrito en input // true / false
// CUMPLIDA revisar si hay algo chequeado en los checkbox // true / false
// revisar si hay algo chequeado en los radio // true / false 
// ver si el nombre escrit en el input coincide con el data-nombre de la tarjeta // true / false
// ver si alguno de los checkbox chequeados coincide con los colores de la tarjeta // true / false
// ver si el radio chequeado coincide con el sexo de la tarjeta // true / false 


const ocultarTarjeta = (card) => {
    return card.classList.add("hidden")
}

const mostrarTarjeta = (card) => {
    return card.classList.remove("hidden")
}

const filtrarTarjetas = () => {
    for (let card of cards) {
        if (pasaFiltros(card)) {
            mostrarTarjeta(card)
        }
        else {
            ocultarTarjeta(card)
        }
    }
}




filtroBusqueda.oninput = () => {
    filtrarTarjetas()
}

for (let checkbox of filtroColor) {
    checkbox.oninput = () => {
        filtrarTarjetas()
    }
}

for (let radio of filtroSexo) {
    radio.oninput = () => {
        filtrarTarjetas()
    }
}


