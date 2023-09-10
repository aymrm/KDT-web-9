const {DataTypes} = require('sequelize');

const User = (sequelize) =>{
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
        },
        pw:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        nickname:{
            type:DataTypes.STRING(20),
        },
        name:{
            type:DataTypes.STRING(20),
        },
        gender:{
            type:DataTypes.STRING(10),
        },
    },
    {
        tableName:'user',
        freezeTableName:true,
        // timestamps:true,
    })
}

module.exports = User;