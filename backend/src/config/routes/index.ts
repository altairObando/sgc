import express = require('express')
import Contacto from './ContactoRoutes';

var app = express();

class Routes{
    get routes(){
        app.use("/Contactos", Contacto)
        return app;
    }
}


export = Routes;