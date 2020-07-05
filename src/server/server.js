var path = require('path')                  // 1-
const express = require('express');         // 2- Express to run server and routes
const dotenv = require('dotenv');           // 3- For the API key to be encrypted
const bodyParser = require('body-parser');  // 4- Dependencies, to parse data
const cors = require('cors');               // 5- Cors for cross origin allowance
var aylien = require("aylien_textapi");     // 6- Require the Aylien npm package

//const mockAPIResponse = require('./mockAPI.js')    //TODO


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




// 7- Setup Server
const port = 8081;
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



// async function gettingData(formText) {
//   var resData;

//   //new Aylien SDK
//   const textapi = new aylien({
//     application_id: process.env.API_ID,
//     application_key: process.env.API_KEY,
//   });

//   await textapi.sentiment({
//     text: formText,
//     mode: 'tweet' //subjectivity analysis is currently only available in tweet mode
//   }, function (error, res) {
//     if (error === null) {
//       resData =  JSON.stringify(res);
//       console.log("resData");
//       console.log(resData);
//       return resData;
//     }
//   });

//   // textapi.extract({
//   //   url: formText,
//   // }, function (error, res) {
//   //   if (error === null) {
//   //     resData = resData + " " + JSON.stringify(res);
//   //     console.log("second result");
//   //     console.log(res);
//   //   }
//   // });

//   console.log("theeee resData: " + resData);

// }


/* POST METHOD */
app.post('/userInput', async (request, response) => {
  const formText = request.body.string;
  console.log("form text: " + formText);

  // var resData = await gettingData(formText);

  //new Aylien SDK
  const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
  });

  textapi.sentiment({
    text: formText,
    mode: 'tweet' //subjectivity analysis is currently only available in tweet mode
  }, function (error, res) {
    if (error === null) {
      response.send(JSON.stringify(res));
    }
  });

  // response.send();
})




app.get('/test', function (req, res) {
  
  let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
  }
  console.log("hii");
  console.log(json);
  res.send(JSON.stringify(json));
});
