const {DataTypes} = require('sequelize');

// 로그인에 필요한 정보만 모아두는 곳
const User = (sequelize)=>{
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
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        salt: {
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        iter:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
    })
}

module.exports = User;