var path = require('path')                  // 1-
const express = require('express');         // 2- Express to run server and routes
const dotenv = require('dotenv');           // 3- For the API key to be encrypted
const bodyParser = require('body-parser');  // 4- Dependencies, to parse data
const cors = require('cors');               // 5- Cors for cross origin allowance
var aylien = require("aylien_textapi");     // 6- Require the Aylien npm package

//const mockAPIResponse = require('./mockAPI.js')    


// 2- Start up an instance of app
const app = express();

// 3- configuring API
dotenv.config();

/* Middleware*/
// 4- Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 5- using cors
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist')); //pointing the app to the folder


// 6- new Aylien SDK
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});


// 7- Setup Server
const port = 3031;
const server = app.listen(port, listening);

function listening() {
  console.log(`server is running on localhost: ${port}`);
}

/* GET METHOD */
// respond with dist/index.html when a GET request is made to the homepage
app.get('/', function (request, result) {
  //result.sendFile('dist/index.html');
  //res.sendFile(path.resolve('src/client/views/index.html'))
  res.sendFile(path.resolve('dist/index.html'));
});



/* POST METHOD */
app.post('/userInput', async (request, response) => {
  const formText = request.body.string;

  console.log("form text: " + formText);


  textapi.sentiment({
    text: formText,
    mode: 'tweet' //subjectivity analysis is currently only available in tweet mode
  }, function (error, res) {
    if (error === null) {
      console.log("adfs " + res.subjectivity_confidence);
      response.send(JSON.stringify(res));
    } else {
      console.log("ERRORRR!!! " + error);
    }
  });
});

