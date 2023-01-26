const Protocols = require("../models/protocols.model");
const Query = require("./config/query");

export async function getProtocols(args){
  try { 
    return new Promise((resolve, reject) => {
      const where = Query.getQuery(args);
      Protocols.getAll(where, data => {
        resolve(data)
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getProtocol(id){
  try { 
    return new Promise((resolve, reject) => {
      const where = 'where id = ' + id;
      Protocols.getProtocol(where, data => {
        resolve(data)
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getProtocolsCount() {
  try {
    return new Promise((resolve, reject) => {
      Protocols.getAllCount(data => {
        resolve(data)
      })  
    })
  } catch (error) {
    return error.message;
  }
}

