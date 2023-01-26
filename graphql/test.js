import { ApolloServer, gql } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-testing'
import { schema } from './schema'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

const { query, mutate } = createTestClient(server);

describe('Test Handlers', function () {

    test("find users list", () => {
        const USERLIST = gql`
            query ($offset: Int = 0, $limit: Int, $filters: [Filter], $sorts: [Sort]) {
                getUsers(offset: 0, limit: 10, filters: [], sorts: []) {
                    count
                    users{
                        idsdf
                        stakedBalance    
                        maturingBalance
                        releasingBalance
                        maturingTimestamp
                        releasingTimestamp
                        balance
                        timestamp
                    }
                }
            }`;

        const userList = query({ query: USERLIST });
        console.log('userList:', userList);
        
    });

    test("find nodes list", () => {
        const NODELIST = gql`
            query ($offset: Int = 0, $limit: Int, $filters: [Filter], $sorts: [Sort]) {
                getNodes(offset: 0, limit: 10, filters: [], sorts: []) {
                    count
                    nodes{
                        id
                        owner
                        status
                        timestamp
                    }
                }
            }`;

        const nodeList = query({ query: NODELIST });
        console.log('nodeList:', nodeList);
    });

    test("find chains list", () => {
        const CHAINLIST = gql`
            query ($offset: Int = 0, $limit: Int, $filters: [Filter], $sorts: [Sort]) {
                getChains(offset: 0, limit: 10, filters: [], sorts: []) {
                    count
                    chains{
                        protocol
                        number
                        targetInterval
                        timestamp
                    }
                }
            }`;

        const chainList = query({ query: CHAINLIST });
        console.log('chainList:', chainList);
    });

    test("find chains list", () => {
        const CHAINLIST = gql`
            query ($offset: Int = 0, $limit: Int, $filters: [Filter], $sorts: [Sort]) {
                getChains(offset: 0, limit: 10, filters: [], sorts: []) {
                    count
                    chains{
                        protocol
                        number
                        targetInterval
                        timestamp
                    }
                }
            }`;

        const chainList = query({ query: CHAINLIST });
        console.log('chainList:', chainList);
    });

    test("find Block list", () => {
        const BLOCKLIST = gql`
            query ($offset: Int = 0, $limit: Int, $filters: [Filter], $sorts: [Sort]) {
                getBlocks(offset: 0, limit: 10, filters: [], sorts: []) {
                    count
                    blocks{
                        id
                        protocol
                        chain
                        number
                        producer
                        node
                        reward
                        difficulty
                        gasPrice
                        gasLimit
                        timestamp
                    }
                }
            }`;

        const blockList = query({ query: BLOCKLIST });
        console.log('blockList:', blockList);
    });

    test("find Protocol list", () => {
        const PROTOCOLLIST = gql`
            query ($offset: Int = 0, $limit: Int, $filters: [Filter], $sorts: [Sort]) {
                getProtocols(offset: 0, limit: 10, filters: [], sorts: []) {
                    count
                    protocols{
                        id
                        version
                        timestamp
                    }
                }
            }`;

        const protocolList = query({ query: PROTOCOLLIST });
        console.log('protocolList:', protocolList);
    });
});
