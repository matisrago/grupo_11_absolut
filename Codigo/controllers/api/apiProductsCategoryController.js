const db = require('../../database/models')

const apiProductsCategoryController = {
    listar:(req,res)=>{
        db.ProductsCategory.findAll()
        .then(resultado=>{
            let respuesta ={
                meta:{
                    status:200,
                    total: resultado.length
                },
                data:{
                    resultado
                }
            }
            res.json(respuesta)
        })
        
        
    }
}

module.exports = apiProductsCategoryController