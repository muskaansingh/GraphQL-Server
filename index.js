const express = require('express');
const resolvers = require ('./resolvers.js');
const schema = require('./schema.js');
const {graphqlHTTP} = require('express-graphql');
const app = express();

app.get('/', (req,res) => {
    res.send("Working on Graphql")
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen("8090", () => {
    console.log("Running on port 8090")
})