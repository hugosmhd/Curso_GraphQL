import express from 'express'
import compression from 'compression'
import cors from 'cors'
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const app = express();
app.use(cors())
app.use(compression())

const server = new ApolloServer({
    schema,
    introspection: true
})

server.applyMiddleware({ app })


/*app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}));*/

const PORT = 5300;
const httpServer = createServer(app)
httpServer.listen(
    { port: PORT },
    () => console.log(`Hola mundo API GraphQL http://localhost:${PORT}/graphql`)    
);