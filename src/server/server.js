const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//use Express
app.use(cors());
app.use(express.static('dist'));

//Here we are configuring express to use body-parser as middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Define function to call MeaningCloud API from server
const meanCloud = async (data, res) => {
  request.post(
    {
      url: 'https://api.meaningcloud.com/sentiment-2.1',
      json: {
        key: process.env.API_KEY,
        lang: 'en',
        url: data,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    },
    (err, req) => {
      if (err) {
        return console.log(err);
      }
      return res.send(req.body).end();
    }
  );
};

// ROUTESje
app.post('/meaning', (req, res) => {
  meanCloud(req.body.txt, res);
});

// LISTEN SERVER
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
