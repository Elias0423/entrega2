const hbs = require('hbs');
const funciones = require('../files/funciones');

hbs.registerHelper('registroUsuario', (identificacion, nombre, correo, telefono, rol, pass) => {

  var res = funciones.registrarUsuario(identificacion, nombre, correo, telefono, rol, pass);
  return "<h4>" + res + "</h4>"

});

hbs.registerHelper('listar', () => {
  listarEstudiantes = require('../listado.json');
  let texto = "<table class='table table-striped'> \
    <thead class='thead-dark'>\
      <th>Nombre</th>\
      <th>Matematicas</th>\
      <th>Ingles</th>\
      <th>Programación</th>\
    </thead>\
    <tbody>";

  listarEstudiantes.forEach(estudiante => {
    texto = texto + '<tr>' +
      "<td>" + estudiante.nombre + '</td>' +
      "<td>" + estudiante.matematicas + '</td>' +
      "<td>" + estudiante.ingles + '</td>' +
      "<td>" + estudiante.programacion + '</td>' +
      '</tr>';
  });
  texto = texto + '</tbody> </table>'
  return texto;
})

hbs.registerHelper('verCursosActivos', () => {
  listadoCursos = require('../files/cursos');
  let texto = '<div class="accordion" id="accordionExample"> \
    <div class="row"> ';
  let i = 1;
  listadoCursos.forEach(curso => {
    if (curso.estado == 1) {
      texto = ` ${texto} 
      <div class="col-sm-4">
            <div class="card sm-6 text-center">
              <div class="card-header" id="heading${i}">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                    ID: ${curso.id} <br> Nombre: ${curso.nombre} <br> descripcion: ${curso.descripcion} <br> valor: ${curso.valor}
                  </button>
              </div>

              <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                <div class="card-body">
                  Descripcion: ${curso.descripcion} <br>
                  Modalidad: ${curso.modalidad == 1 ? "Virtual" : "Presencial"} <br>
                  Intensidad Horaria: ${curso.horas} <br>
                </div>
              </div> 
            </div> 
            </div> `
      i = i + 1;
    }
  });
  texto = texto + '  </div>  </div>'

  return texto;
})

hbs.registerHelper('verCursos', () => {
  listadoCursos = require('../files/cursos');
  let texto = '<div class="accordion" id="accordionExample"> \
    <div class="row"> ';
  let i = 1;
  listadoCursos.forEach(curso => {
    texto = ` ${texto} 
      <div class="col-sm-4">
            <div class="card sm-6 text-center">
              <div class="card-header" id="heading${i}">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                  ID: ${curso.id} <br> Nombre: ${curso.nombre} <br> descripcion: ${curso.descripcion} <br> valor: ${curso.valor}
                  </button>
              </div>

              <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                <div class="card-body">
                  Descripcion: ${curso.descripcion} <br>
                  Modalidad: ${curso.modalidad == 1 ? "Virtual" : "Presencial"} <br>
                  Intensidad Horaria: ${curso.horas} <br>
                  Estado: ${curso.estado == 1 ? "Abierto" : "Cerrado"}
                </div>
              </div> 
            </div> 
            </div> `
    i = i + 1;
  });
  texto = texto + '  </div>  </div>'

  return texto;
})

hbs.registerHelper('listarCursos', () => {
  listadoCursos = require('../files/cursos');
  let texto = '';

  listadoCursos.forEach(curso => {
    texto = ` ${texto} <option value="${curso.id}">${curso.nombre}</option> `
  });

  return texto;
})