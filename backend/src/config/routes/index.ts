import express = require('express')
import Contacto from './ContactoRoutes';

var app = express();

class Routes{
    get routes(){
        app.use("/api/Contactos", Contacto)
        return app;
    }
}


export = Routes;