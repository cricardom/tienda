const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./db')

const app = express();

// Configuracion
app.set('port', process.env.PORT || 2022);
app.use(morgan('dev'));
app.use(express.json());

// Carga de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api', require('./rutas/rutas'))

app.listen(app.get('port'), () => {
  console.log(`Servidor inicializado en el puerto ${app.get('port')}`)
});