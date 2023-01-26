const Nodes = require("../models/nodes.model");
const Query = require("./config/query");

export async function getNodes(args){
  try { 
    return new Promise((resolve, reject) => {
      const where = Query.getQuery(args);
      Nodes.getAll(where, data => {
        resolve(data)
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getNodesCount() {
  try {
    return new Promise((resolve, reject) => {
      Nodes.getAllCount(data => {
        resolve(data)
      })  
    })
  } catch (error) {
    return error.message;
  }
}

