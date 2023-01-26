const Users = require("../models/users.model");
const Query = require("./config/query");

export async function getUsers(args){
  try { 
    return new Promise((resolve, reject) => {
      const where = Query.getQuery(args);
      Users.getAll(where, data => {
        resolve(data)
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getUser(id){
  try { 
    return new Promise((resolve, reject) => {
      const where = 'where id = ' + id;
      Users.getUser(where, data => {
        resolve(data)
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getUsersCount() {
  try {
    return new Promise((resolve, reject) => {
      Users.getAllCount(data => {
        resolve(data)
      })  
    })
  } catch (error) {
    return error.message;
  }
}

