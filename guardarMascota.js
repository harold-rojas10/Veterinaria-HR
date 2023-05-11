const formularioMascotas = document.getElementById('registro-mascotas-form')
formularioMascotas.addEventListener('submit', (event) => {
  event.preventDefault();
  const datosMascota = {
    nombreMascota: document.getElementById('mascota').value,
    nombreDueño: document.getElementById('dueño').value,
    cedulaDueño: document.getElementById('cedula').value,
    edadMascota: document.getElementById('edad').value,
    telefonoDueño: document.getElementById('telefono').value,
    especialidad: document.getElementById('especialidad').value
  }
  //console.log(datosMascota)
  guardarCookies(datosMascota)
})

function guardarCookies(mascota) {
  //las cookies antiguas
  let datos = obtenerCookie("mascotas");
  if (datos === "") {
    datos = "[]";
  }
  //objeto
  const mascotasObjetos = JSON.parse(datos);
  //añadir nuevas
  mascotasObjetos.push(mascota);
  const jsonDatos = JSON.stringify(mascotasObjetos)
  cambiarCookie("mascotas", jsonDatos)

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