const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;

  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  facciones = document.getElementById("facciones").value;
  correo = document.getElementById("correo").value;

  regExNombre = /[a-zÀ-ÿ\s]{2,20}/i
  regExApellido = /[a-zÀ-ÿ\s]{2,20}/i
  regExFacciones = /[a-zÀ-ÿ\s]{2,20}/i
  regExCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  if (!regExNombre.test(nombre)) {
    condicion = false;
    mostrarMensajeError("nombre", "Nombre no valido*");
  }
  else if (!regExApellido.test(apellido)) {
    condicion = false;
    mostrarMensajeError("apellido", "Apellido no valido*");
  }
  else if (!regExFacciones.test(facciones)) {
    condicion = false;
    mostrarMensajeError("facciones", "Facciones no validas*");
 }
  else if (!regExCorreo.test(correo)) {
    condicion = false;
    mostrarMensajeError("correo", "Correo no valido*");
  }

  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {

  form.reset();
  form.lastElementChild.innerHTML = "Resgistrado Correctamente";

}
