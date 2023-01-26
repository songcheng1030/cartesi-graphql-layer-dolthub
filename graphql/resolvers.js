import { PubSub } from 'apollo-server-express'
import { getUsers, getUsersCount, getUser } from '../service/users';
import { getNodes, getNodesCount } from '../service/nodes';
import { getProtocols, getProtocolsCount } from '../service/protocols';
import { getChains, getChainsCount } from '../service/chains';
import { getBlocks, getBlocksCount } from '../service/blocks';
import BigInt from "apollo-type-bigint";

const resolvers = {
  BigInt: new BigInt("bigInt"),
  Query: {
    async getUsers (parent, args, context, info) {

      const data = await getUsers(args);
      const count  = await getUsersCount();
      
      const res = {users:data, count: count[0][`count(*)`]};
      return res
    },

    async getNodes (parent, args, context, info) {
      const data = await getNodes(args);
      const count  = await getNodesCount();

      const res = {nodes:data, count: count[0][`count(*)`]};
      return res;
    },

    async getProtocols (parent, args, context, info) {

      const data = await getProtocols(args);
      const count  = await getProtocolsCount();
      
      const res = {protocols:data, count: count[0][`count(*)`]};
      return res
    },

    async getChains (parent, args, context, info) {

      const data = await getChains(args);
      const count  = await getChainsCount();
      
      const res = {chains:data, count: count[0][`count(*)`]};
      return res
    },

    async getBlocks (parent, args, context, info) {

      const data = await getBlocks(args);
      const count  = await getBlocksCount();
      
      const res = {blocks:data, count: count[0][`count(*)`]};
      return res
    },
    
    async getUser (parent, args, context, info) {
      const data = await getUser(args.id);
      return data;
    }
  }
}

export default resolvers
