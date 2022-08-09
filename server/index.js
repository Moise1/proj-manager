const express  = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Connect to DB

connectDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))
app.listen(port, console.log(`App listening on port ${port}....`));

