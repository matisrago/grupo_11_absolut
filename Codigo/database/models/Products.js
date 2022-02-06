module.exports= function(sequelize,dataTypes){
    let alias = "Products"

    let cols = {
        id:{type:dataTypes.INTEGER, primaryKey:true,autoIncrement:true},
        name:{type:dataTypes.STRING},
        description:{type:dataTypes.STRING},
        price:{type:dataTypes.FLOAT},
        image:{type:dataTypes.STRING},
        id_category:{type:dataTypes.INTEGER},
        id_ubicacion:{type:dataTypes.INTEGER},
        detail:{type:dataTypes.STRING}
    }

    let config ={
        tableName: "products",
        timestamps: false
    }
    let Products = sequelize.define(alias,cols,config);

    Products.associate = function(models){
        Products.belongsTo(models.ProductsCategory,{
            as: "ProductCategory",
            foreignKey: "id_category"
        });
        Products.associate = function(models){
            Products.belongsTo(models.ProductsUbicacion,{
                as: "ProductUbicacion",
                foreignKey: "id_ubicacion"
            })
        }
    }
    return Products
}