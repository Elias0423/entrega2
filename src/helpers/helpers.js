const hbs = require('hbs');

hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) => {
  return (nota1 + nota2 + nota3) / 3;
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

hbs.registerHelper('verCursos', () => {
  listadoCursos = require('../files/cursos');
  let texto = '<div class="accordion" id="accordionExample"> ';
  let i = 1;
  listadoCursos.forEach(curso => {
    if (curso.estado == 1) {
      texto = ` ${texto} <div class="card">
              <div class="card-header" id="heading${i}">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                    Curso: ${curso.nombre} descripcion: ${curso.descripcion} valor: ${curso.valor}
                  </button>
                </h2>
              </div>
          
              <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                <div class="card-body">
                  Descripcion: ${curso.descripcion} <br>
                  Modalidad: ${curso.modalidad==1 ? "Virtual" : "Presencial"} <br>
                  Intensidad Horaria: ${curso.horas} <br>
                </div>
              </div> 
            </div> `
      i = i + 1;
    }
  });
  texto = texto + '</div>'

  return texto;
})