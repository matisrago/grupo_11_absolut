const db = require('../../database/models')

const apiUserController= {
    listar:(req,res)=>{
        db.Products.findAll({attributes: ['id','name','description','id_category','id_ubicacion']})
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
        db.Products.findByPk(req.params.id)
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
    module.exports = apiUserController