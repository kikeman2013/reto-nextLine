
const BD = require('../dbs/user.json')
const fs = require('fs')


const save = (BD)=>{
  fs.writeFileSync('./dbs/user.json', JSON.stringify(BD , null , 2),{encoding:'utf-8'})
}


const ifExist = (userName) =>{
  return BD.users.findIndex( user  => user.userName === userName) > -1 
  }
  const ifExistById = (userId) =>{
    return BD.users.findIndex( user  => user.userId === userId) >= 0 
  }



class UserRepository {
  insertUser = async(data) => {
    if(ifExist(data.userName)) return {status:false, message:"el usuario ya existe"} 

    BD.users.push(data)
    save(BD)
    return {status:true, 
      message:`Usuario creado con el id: ${data.userId}`,
      data:data}
}

  getAllUsers = async ()=> {
    return {status:true , message:`${BD.users.length} Usuarios Encotrados` , data: BD.users}
  }

  getUser = async(data) => {
    if(!ifExistById(data.userId)) return {status:false, message:"el usuario no existe"}
    const user = BD.users.filter(user => user.userId === data.userId)
    return{status:true, 
      message:"Usuario encontrado",
      data:user}
  
  }

  updateUser = async(data) => { 
    if(!ifExistById(data.userId)) return {status:false, message:"el usuario no existe"} 
    BD.users.forEach( user =>{
      if(user.userId === data.userId){
        user.userName = data.userName || user.userName
        user.email = data.email || user.email
        user.age = data.age || user.age
        user.dateUpdated || data.dateUpdated || ''

        data = user
      }
    })

  return{status:true, 
    message:`Usuario ${data.userId} actualizado`,
    data:data}
  }

  deleteUser = async(data) => {
    if(!ifExistById(data.userId)) return {status:false, message:"el usuario no existe"} 
    
    BD.users = BD.users.filter(user => user.userId !== data.userId)
    save(BD)
    return{status:true, message:`Usuario ${data.userId} eliminado`,}
  }

}
module.exports = new UserRepository();
