const { sequelize } = require('../../database/models')
const db = require('../../database/models')

const apiUserController= {
    listar:(req,res)=>{
        db.Products.findAll({attributes: ['id','name','description','id_category','id_ubicacion','detail']})
        .then(resultado=>{
            let vodka = []
            let cerveza = []
            let otros = []
            for(let i=0;i<resultado.length;i++){
                if(resultado[i].id_category == 1){
                    vodka.push(resultado[i])
                }else if(resultado[i].id_category == 2){
                    cerveza.push(resultado[i])
                }else{
                    otros.push(resultado[i])
                }
            }
            let respuesta = {
                meta:{
                    status: 200,
                    total: resultado.length
                },
                totalesCategorias:{
                    vodka: vodka.length,
                    cerveza: cerveza.length,
                    otros:otros.length
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
    },
    maximo:(req,res)=>{
        let maxId = []
        db.Products.findAll({
            
            attributes: [[sequelize.fn('max',sequelize.col('id')),'maxId']],
            raw: true
        })

        .then(resultado=>{
            let Producto = {
                ...resultado
            }
            db.Products.findAll({
                where:{id:Producto[0].maxId}
            })
        
            .then(result=>{
                let respuesta = {
                    meta:{
                        status: 200
                    },
                    data:{
                    result
                    }
                }
                res.json(respuesta)
                
            })
        })    
        
    },
    categoria1:(req,res)=>{
        db.Products.findAll({
            where:{id_category:req.params.id}
        })
        .then(
            resultado=>{
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
    }
}
    module.exports = apiUserController