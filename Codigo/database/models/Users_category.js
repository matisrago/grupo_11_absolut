module.exports= function(sequelize,dataTypes){
    let alias = "UsersCategory"

    let cols = {
        id:{type:dataTypes.INTEGER, primaryKey:true,autoIncrement:true},
        name:{type:dataTypes.STRING},
    }

    let config ={
        tableName: "users_category",
        timestamps: false
    }
    let UsersCategory = sequelize.define(alias,cols,config);
    return UsersCategory
}