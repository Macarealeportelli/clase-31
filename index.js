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

const hayAlgunCheckBoxChequeado = () => {
  for (checkbox of filtroColor) {
    if (checkbox.checked) {
      return true
    }
  }
  return false
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


