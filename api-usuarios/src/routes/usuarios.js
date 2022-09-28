const Usuario = require("../models/Usuario");

const router = require("express").Router();

router.get("/", async(req, res)=>{
 const usuarios = await Usuario.findAll();
    res.json(usuarios);
})



// Un solo usuario
router.get("/:id",async(req,res) =>{
    const {id} = req.params;
        const usuario = await Usuario.findByPk(id);
        res.json(usuario);
});


//Crear un Usuario

router.post("/", async(req,res) =>{
    const {nombre,email} = req.body;

    if(!nombre || !email){
     return res.status(400).json({
        error: "Uno o mas campos Vacios"
     });
       

    }
    const usuario = await Usuario.create({nombre, email});
    res.json(usuario);

   



})



module.exports = router;