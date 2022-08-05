const express  = require('express');
const dotenv = require('dotenv');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))
app.listen(port, console.log(`App listening on port ${port}....`));