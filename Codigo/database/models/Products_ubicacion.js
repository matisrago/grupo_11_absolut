module.exports= function(sequelize,dataTypes){
    let alias = "ProductsUbicacion"

    let cols = {
        id:{type:dataTypes.INTEGER, primaryKey:true,autoIncrement:true},
        name:{type:dataTypes.STRING},
    }

    let config ={
        tableName: "products_ubicacion",
        timestamps: false
    }
    let ProductsUbicacion = sequelize.define(alias,cols,config);

    ProductsUbicacion.associate = function(models){
        ProductsUbicacion.hasMany(models.Products,{
            as: "Products",
            foreignKey: "id_ubicacion"
        })
    }
    return ProductsUbicacion
}