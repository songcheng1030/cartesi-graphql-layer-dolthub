const Blocks = require("../models/blocks.model");
const Query = require("./config/query");

export async function getBlocks(args){
  try { 
    return new Promise((resolve, reject) => {
      const where = Query.getQuery(args);
      Blocks.getAll(where, data => {
        resolve(data);
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getBlock(id){
  try { 
    return new Promise((resolve, reject) => {
      const where = 'where id = ' + id;
      Blocks.getBlock(where, data => {
        resolve(data)
      })  
    })
  }
  catch (error) {
    return error.message;
  }
};

export async function getBlocksCount() {
  try {
    return new Promise((resolve, reject) => {
      Blocks.getAllCount(data => {
        resolve(data)
      })  
    })
  } catch (error) {
    return error.message;
  }
}

