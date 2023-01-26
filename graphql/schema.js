import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import resolvers from './resolvers'
import { gql } from 'apollo-server-express'

const typeDefs = gql`
  scalar BigInt
    type Query {
      getUsers(offset: Int = 0, limit: Int, filters: [Filter], sorts: [Sort]): Users!
      getNodes(offset: Int = 0, limit: Int, filters: [Filter], sorts: [Sort]): Nodes!
      getProtocols(offset: Int = 0, limit: Int, filters: [Filter], sorts: [Sort]): Protocols!
      getChains(offset: Int = 0, limit: Int, filters: [Filter], sorts: [Sort]): Chains!
      getBlocks(offset: Int = 0, limit: Int, filters: [Filter], sorts: [Sort]): Blocks!
      getUser(id: String!): User
      getNode(id: String!): Node
      getProtocol(id: String!): Protocol
      getChain(id: String!): Chain
      getBlock(id: String!): Block
    }
    
    type Users {
      users: [User!]!
      count: Int!  
    }

    type Nodes {
      nodes: [Node!]!
      count: Int!
    }

    type Protocols {
      protocols: [Protocol!]!
      count: Int!
    }

    type Chains {
      chains: [Chain!]!
      count: Int!
    }

    type Blocks {
      blocks: [Block!]!
      count: Int!
    }

    type User {
      id: String!
      stakedBalance: String!
      maturingBalance: String!
      releasingBalance: String!
      maturingTimestamp: BigInt!
      releasingTimestamp: BigInt!
      balance: String!
      timestamp: BigInt!
    }

    type Node {
      id: String!
      owner: String
      status: String
      timestamp: BigInt!
    }

    type Protocol {
      id: String!
      version: BigInt
      timestamp: BigInt!
    }

    type Chain {
      protocol: String!
      number: Int!
      targetInterval: BigInt!
      timestamp: BigInt!
    }

    type Block {
      id: String!
      protocol: String!
      chain: Int!
      number: Int!
      producer: String!
      node: String!
      reward: String
      difficulty: String!
      gasPrice: BigInt!
      gasLimit: BigInt!
      timestamp: BigInt!
    }

    input Filter {
      field: String!,
      contains: String
    }
    
    enum SortOrder {
      ASC
      DESC
    }
  
    input Sort {
      field: String!,
      sort: SortOrder = ASC
    }

`

const schema = makeExecutableSchema({ typeDefs, resolvers })

// addMockFunctionsToSchema({ schema, mocks })

export { schema, typeDefs }
