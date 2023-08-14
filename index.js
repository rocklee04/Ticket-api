const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./Routes/api');

dotenv.config();

//create express app
const app = express();
app.use(express.json());
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Air Ticket Booing API',
        version: '1.0.0',
      },
    },
    apis: ['./Routes*.js'], // files containing annotations as above
  };

  const specification = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specification))

const PORT = process.env.port || 6000;
const MongoDB_URL = process.env.MongoDB_URL || 'mongodb+srv://rmonishaverma:light@cluster0.wxw8yls.mongodb.net/airbooking?retryWrites=true&w=majority';


app.get('/', (req,res) => {
    res.send('Welcome To Flight Ticket Booking')
})



//API Routes
app.use('/api', routes);

mongoose.connect(MongoDB_URL)
.then(() => {
    console.log('Connected To DB')
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
