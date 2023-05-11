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
  const jsonDatosMed = JSON.stringify(datosMedicos)
  console.log(jsonDatosMed)
})