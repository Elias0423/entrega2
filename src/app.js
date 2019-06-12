const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers/helpers');


const dirNodeModules = path.join(__dirname, '../node_modules');
app.use('/css', express.static(dirNodeModules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNodeModules + '/jquery/dist'));
app.use('/js', express.static(dirNodeModules + '/popper.js/dist'));
app.use('/js', express.static(dirNodeModules + '/bootstrap/dist/js'));


const directoriopublico = path.join(__dirname, '../public');
app.use(express.static(directoriopublico));

const directoriopartials = path.join(__dirname, '../templates/partials');
hbs.registerPartials(directoriopartials);

app.use(bodyParser.urlencoded({extended: false}))
app.set('views', './templates/views/')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Inicio'
    });
});

app.get('/listado', (req, res) => {
    res.render('listado', {
        titulo: 'Listado'
    });
});


app.get('/crearcurso', (req, res) => {
    res.render('crearcurso', {
        titulo: 'Crear Curso'
    });
});
app.get('/vercursos', (req, res) => {
    res.render('vercursos', {
        titulo: 'Ver cursos'
    });
});


app.post('/registrarcurso', (req, res) => {
    console.log(req.body)
    res.render('registrarcurso', {
        id: Number(req.body.id),
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        valor: Number(req.body.valor),
        modalidad: Number(req.body.modalidad),
        horas: Number(req.body.horas)
    });
});

app.post('/calculos', (req, res) => {
    res.render('calculos', {
        nombre: req.body.nombre,
        nota1: Number(req.body.nota1),
        nota2: Number(req.body.nota2),
        nota3: Number(req.body.nota3)
    });
});

app.get('*', (req, res) => {
    res.render('error', {
        estudiante: "error"
    });
})

app.listen(3001, () => {
    console.log("Server en puerto 3001")
})