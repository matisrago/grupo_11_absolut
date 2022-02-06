const db = require('../../database/models')

const apiUserController= {
listar:(req,res)=>{
    db.Users.findAll({attributes: ['id','name','surname','email','date','detail']})
    .then(resultado=>{

        let respuesta = {
            meta:{
                status: 200,
                total: resultado.length
            },
            data:{
            resultado
            }
        }
        res.json(respuesta)
    })
},
detalle:(req,res)=>{
    db.Users.findByPk(req.params.id,{attributes: ['id','name','email','date','image']})
    .then(resultado=>{
        let respuesta = {
            meta:{
                status: 200
            },
            data:{
            resultado
            }
        }
        res.json(respuesta)
    })
}
}

module.exports=apiUserController;