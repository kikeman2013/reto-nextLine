const BD = require('../BD/bd.user.json')
const fs = require('fs')

//Funcion para guardar a la base de datos
const save = (BD)=>{
    fs.writeFileSync('./BD/user.BD.json', JSON.stringify(BD , null , 2),{encoding:'utf-8'})
  }
  
  //funcion para comprobar si existe un nombre usuario en la base de datos
const ifExist = (userName) =>{
    return BD.users.findIndex( user  => user.userName === userName) > -1 
    }

//funcion para comprobar si existe un Id en la base de datos
const ifExistById = (userId) =>{
    return BD.users.findIndex( user  => user.userId === userId) >= 0 
    }
  
module.exports ={
    save,
    ifExist,
    ifExistById,
    BD
}