
const userRepository = require('../repositories/user.repository');
const { v4: uuid } = require('uuid');

class UserService {
  insertUser = async(data) => {
    

    const dateCreated = new Date(Date.now()).toLocaleString()
    data = {userId: uuid(), ...data , dateCreated}
    const result = await userRepository.insertUser(data);
    return result;
  }

  getAllUsers = async(data) => {
    const result = await userRepository.getAllUsers();
    return result;
  }

  getUser = async(data) => {
    
    const result = await userRepository.getUser(data);
    return result;
  }
  updateUser = async(data) => {
   

    const dateUpdated = new Date(Date.now()).toLocaleString()
    data = {...data , dateUpdated}
    const result = await userRepository.updateUser(data);
    return result;
  }
  deleteUser = async(data) => {
    const result = await userRepository.deleteUser(data);
    return result;
  }
}
module.exports = new UserService();
