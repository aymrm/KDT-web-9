const {DataTypes} = require("sequelize");

const User=(sequelize)=>{
    return sequelize.define('user',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        userid:{
            type:DataTypes.STRING(20),
            allowNull:false,
            defaultValue:'as',
        },
        pw:{
            type:DataTypes.STRING(255),
            allowNull:false
        },
        name:{
            type:DataTypes.STRING(10),
            allowNull:false
        },
        salt: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        iter: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}

module.exports = User;