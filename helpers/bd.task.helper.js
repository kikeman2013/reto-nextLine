const BD = require('../BD/bd.task.json')
const fs = require('fs')

//Funcion para guardar a la base de datos
const save = (BD)=>{
    fs.writeFileSync('./BD/task.BD.json', JSON.stringify(BD , null , 2),{encoding:'utf-8'})
  }
  
  //funcion para comprobar si existe un nombre usuario en la base de datos
const ifExist = (userName) =>{
    return BD.tasks.findIndex( user  => user.userName === userName) > -1 
    }

//funcion para comprobar si existe un Id en la base de datos
const ifExistById = (userId) =>{
    return BD.tasks.findIndex( user  => user.userId === userId) >= 0 
    }
  
module.exports ={
    save,
    ifExist,
    ifExistById,
    BD
}