const {DataTypes} = require('sequelize');

const Profile = (sequelize)=>{
    return sequelize.define('profile',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        auth:{
            type:DataTypes.STRING(20),
            defaultValue:'user',
        },
        userid:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(10),
            allowNull:false
        },
        uuid:{
            type:DataTypes.UUID,
            allowNull:false,
        },
    })
}

module.exports = Profile;