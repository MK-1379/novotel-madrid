const url = new URLSearchParams(window.location.search);
const entrada = url.get("entrada");
const salida = url.get("salida");
const adultos = Number(url.get("adultos"));
const ninos = Number(url.get("ninos"));
const noches = (new Date(salida) - new Date(entrada)) / (1000 * 60 * 60 * 24);

if (document.querySelector(".disponible, #formReserva") && !(noches > 0)) {
  window.location.replace("index.html#buscador");
}

const habitaciones = {
  "estandar": { nombre: "Habitación Estándar", foto: "img/habitacion-estandar.jpg", precio: 165 },
  "familiar": { nombre: "Estándar Familiar", foto: "img/habitacion-familiar.jpg", precio: 190 },
  "superior": { nombre: "Habitación Superior", foto: "img/habitacion-superior.jpg", precio: 185 },
  "ejecutiva-salon": { nombre: "Ejecutiva con salón", foto: "img/ejecutiva-salon.jpg", precio: 245 },
  "ejecutiva-terraza": { nombre: "Ejecutiva con terraza", foto: "img/ejecutiva-terraza.jpg", precio: 235 },
  "suite": { nombre: "Suite Superior", foto: "img/suite-superior.jpg", precio: 320 }
};

const formBusqueda = document.getElementById("formBusqueda");   

if (formBusqueda) {
  formBusqueda.addEventListener("submit", (e) => {
    const fechaEntrada = document.getElementById("entrada").value;
    const fechaSalida = document.getElementById("salida").value;

    if (!formBusqueda.checkValidity()) {
      e.preventDefault();
      formBusqueda.classList.add("was-validated");
    } else if (fechaSalida <= fechaEntrada) {
      e.preventDefault();
      alert("La fecha de salida tiene que ser después de la de entrada");
    }
  });
}

const filtros = document.querySelectorAll("[data-filtro]");

filtros.forEach((boton) => {
  boton.addEventListener("click", () => {
    filtros.forEach((b) => {
      b.classList.remove("active");
    });
    boton.classList.add("active");

    document.querySelectorAll(".habitacion").forEach((tarjeta) => {
      if (boton.dataset.filtro == "todas" || boton.dataset.filtro == tarjeta.dataset.categoria) {
        tarjeta.classList.remove("d-none");
      } else {
        tarjeta.classList.add("d-none");
      }
    });
  });
});

const tarjetasDisponibles = document.querySelectorAll(".disponible");

if (tarjetasDisponibles.length > 0) {
  document.getElementById("textoEntrada").textContent = entrada;
  document.getElementById("textoSalida").textContent = salida;
  document.getElementById("textoNoches").textContent = noches;
  document.getElementById("textoHuespedes").textContent = adultos + " adultos, " + ninos + " niños";

  tarjetasDisponibles.forEach((tarjeta) => {
    if (tarjeta.dataset.personas < adultos + ninos) {
      tarjeta.classList.add("d-none");
    }
    tarjeta.querySelector(".total").textContent = tarjeta.dataset.precio * noches + " €";
    tarjeta.querySelector("a").href = "complete-reservation.html" + window.location.search + "&habitacion=" + tarjeta.dataset.habitacion;
  });
}

const formReserva = document.getElementById("formReserva");

if (formReserva) {
  const habitacion = habitaciones[url.get("habitacion")] || habitaciones["estandar"];

  document.getElementById("fotoHabitacion").src = habitacion.foto;
  document.getElementById("nombreHabitacion").textContent = habitacion.nombre;
  document.getElementById("textoEntrada").textContent = entrada;
  document.getElementById("textoSalida").textContent = salida;
  document.getElementById("textoHuespedes").textContent = adultos + " adultos, " + ninos + " niños";
  document.getElementById("textoPrecio").textContent = habitacion.precio + " €";
  document.getElementById("textoNoches").textContent = noches;
  document.getElementById("textoTotal").textContent = habitacion.precio * noches + " €";

  formReserva.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formReserva.checkValidity()) {
      formReserva.reset();
      formReserva.classList.remove("was-validated");
      new bootstrap.Modal(document.getElementById("modalReserva")).show();
    } else {
      formReserva.classList.add("was-validated");
    }
  });
}
