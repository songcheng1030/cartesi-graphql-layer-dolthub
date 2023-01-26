const Chains = require("../models/chains.model");
const Query = require("./config/query");

export async function getChains(args){
  try { 
    return new Promise((resolve, reject) => {
      const where = Query.getQuery(args);
      Chains.getAll(where, data => {
        resolve(data)
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getChain(id){
  try { 
    return new Promise((resolve, reject) => {
      const where = 'where id = ' + id;
      Chains.getChain(where, data => {
        resolve(data)
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getChainsCount() {
  try {
    return new Promise((resolve, reject) => {
      Chains.getAllCount(data => {
        resolve(data)
      })  
    })
  } catch (error) {
    return error.message;
  }
}

