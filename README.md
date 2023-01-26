# graphql-layer-dolthub

Server module for a GraphQL interface layer on top of a local Dolt repository(MySQL database).

- Here are the steps to run

1. run ```git clone git@github.com:cartesi-corp/graphql-layer-dolthub.git```

2. run ```docker build -t cartesi/graphql:develop .``` in the "graphql-layer-dolthub" project

3. run ```git clone git@github.com:cartesi-corp/pos-dlib.git --recursive```

4. run ```docker build -t cartesi/pos:develop .``` in the "pos-dlib" project (feature/dolt-experiment branch)

5. run ```URL="" WS_URL="" NETWORK="mainnet" docker-compose up --build``` in the "pos-dlib" project



- To test

```npm run test```


