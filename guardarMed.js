const formularioMedicos = document.getElementById('registro-medicos-form')
formularioMedicos.addEventListener('submit', (event) => {
  event.preventDefault();
  const datosMedicos = {
    nombreMedico: document.getElementById('nombre').value,
    apellidoMedico: document.getElementById('apellido').value,
    cedulaMedico: document.getElementById('cedula').value,
    consultorio: document.getElementById('consultorio').value,
    telefono: document.getElementById('telefono').value,
    correo: document.getElementById('correo').value,
    especialidad: document.getElementById('especialidad').value
  }
  //console.log(datosMascota)
  guardarCookies(datosMedicos)
  const confirmacion = confirm("¿Desea ver los datos?")
  if (confirmacion == true) {
    window.location.href = "medicos.html"
  } else {
    formularioMedicos.reset()
  }
})

function guardarCookies(medico) {
  //las cookies antiguas
  let datos = obtenerCookie("medico");
  if (datos === "") {
    datos = "[]";
  }
  //objeto
  const medObjetos = JSON.parse(datos);
  //añadir nuevas
  medObjetos.push(medico);
  const jsonDatos = JSON.stringify(medObjetos)
  cambiarCookie("medico", jsonDatos)

}

function obtenerCookie(nombre) {
  const cookies = document.cookie.split("; ")
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === nombre) {
      return decodeURIComponent(cookie[1]);
    }
  }
  return "";
}

function cambiarCookie(nombre, valor) {
  document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}