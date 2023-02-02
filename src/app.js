const express = require('express');
const cors = require('cors');
const morgan = require('morgan');//es para hacer log-detectar errores
const routerApi = require('./routes');
const error = require('./middlewares/error.middleware');

const app = express();//instancia de express

app.use(express.json());
app.use(cors());//se instala para origines cruzados, ej: peticiones de  netlfy
app.use(morgan('tiny'));

routerApi(app);//funcion de rutas y tambien middlewares

db.sync({ alter:true})
.then(() => console.log("conexion exitosa"))
.catch((err) => console.log(err))

app.use(error)

module.exports = app;