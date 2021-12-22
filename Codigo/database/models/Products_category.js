module.exports= function(sequelize,dataTypes){
    let alias = "ProductsCategory"

    let cols = {
        id:{type:dataTypes.INTEGER, primaryKey:true,autoIncrement:true},
        name:{type:dataTypes.STRING},
    }

    let config ={
        tableName: "products_category",
        timestamps: false
    }
    let ProductsCategory = sequelize.define(alias,cols,config);

    ProductsCategory.associate = function(models){
        ProductsCategory.hasMany(models.Products,{
            as: "Products",
            foreignKey: "id_category"
        })
    }
    return ProductsCategory
}