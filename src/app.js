const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productoRoutes');

mongoose.connect('mongodb://localhost/rest-api-tienda', {
    useNewUrlParser: true
}).then(db => console.log('db is connected'))
.catch(err => console.log(err));

//Configuracion de puerto
app.set('port', process.env.PORT || 3000);

//Middleware de Express
app.use(morgan('dev'));
app.use(bodyParser.json());

//Ruta 
app.use('/api/usuario', usersRoutes);
app.use('/api/producto', productRoutes);

//Inicializar servidor
app.listen(app.get('port'), () => {
    console.log('server or port ', app.get('port'));
});