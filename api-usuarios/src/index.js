const express = require('express')
const cors = require('cors')
const usuarios = require("./routes/usuarios");
const db = require('./db/database');
const app = express()
const port = process.env.PORT || 3033;


(async()=>{

    try{
        await db.authenticate();
        await db.sync();
        console.log("conectados a la base de datos");
    }catch(error){
        throw new Error(error)
    }

    
})()





app.use(express.json()); //recibir informacion 
app.use(cors());//habilitar otras aplicaciones para realizar solicitudes a nuestra app

app.use("/usuarios", usuarios);







app.listen(port,()=>{
    console.log("Servidor ejecutandose en el puerto:", port);

});