module.exports= function(sequelize,dataTypes){
    let alias = "Users"

    let cols = {
        id:{type:dataTypes.INTEGER, primaryKey:true,autoIncrement:true},
        name:{type:dataTypes.STRING},
        surname:{type:dataTypes.STRING},
        date:{type:dataTypes.DATE},
        email:{type:dataTypes.STRING},
        password:{type:dataTypes.STRING},
        image:{type:dataTypes.STRING},
        detail:{type:dataTypes.STRING}
    }

    let config ={
        tableName: "users",
        timestamps: false
    }
    let users = sequelize.define(alias,cols,config);
    return users
}