const fs = require('fs');
listaUsuarios = [];
listaMatriculas = [];
const registrarUsuario = (identificacion, nombre, correo, telefono, rol, pass) => {
  listaUsuarios = require('./usuarios.json');
  let user = {
    identificacion: identificacion,
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    rol: rol,
    pass: pass
  };
  let validacion = listaUsuarios.find(id => id.identificacion == user.identificacion);
  if (!validacion) {
    listaUsuarios.push(user);
    guardarUsuario();
    return 'usuario creado exitosamente'
  } else {
    return 'usuario ya existe'
  }
}
const guardarUsuario = () => {
  let datos = JSON.stringify(listaUsuarios);
  fs.writeFile(__dirname + '/usuarios.json', datos, (err) => {
    if (err) console.log(err);
    console.log("usuario creado")
  });
}

const validarLogin = (identificacion, pass) => {
  listaUsuarios = require('./usuarios.json');
  let encontrado = false
  let user = {}
  for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].identificacion == identificacion && listaUsuarios[i].pass == pass) {
      encontrado = true;
      user = listaUsuarios[i];
    }
  }
  if (encontrado == true) {
    return user;
  } else {
    return false;
  }
}

const matricularAspirante = (identificacion, curso) => {
  listaUsuarios = require('./usuarios.json');
  listaMatriculas = require('./matriculas.json');
  let matricula = {
    identificacion: identificacion,
    curso: curso
  }
  let validacion = listaUsuarios.find(id => id.identificacion == identificacion);
  if (!validacion) {
    return "La cedula no esta registrado"
  } else {
    let valMatricula = listaMatriculas.find(est => (est.identificacion == identificacion && est.curso == curso));
    console.log(valMatricula)
    if (!valMatricula) {
      listaMatriculas.push(matricula);
      guardarMatricula();
      return "Matricula exitosa"
    } else {
      return "El aspirante ya se encuentra matriculado en el curso"
    }
  }
}

const guardarMatricula = () => {
  let datos = JSON.stringify(listaMatriculas);
  fs.writeFile(__dirname + '/matriculas.json', datos, (err) => {
    if (err) console.log(err);
    console.log("matricula creada")
  });
}

module.exports = { registrarUsuario, validarLogin, matricularAspirante }