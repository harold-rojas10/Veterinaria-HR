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
  const jsonDatos = JSON.stringify(datosMascota)
  console.log(jsonDatos)
})