//fetcher.js
const request = require('request');
const fs = require('fs');

// ======== listen from node call
const argv = process.argv.slice(2);
let domain = argv[0];
let fileName = argv[1];

//use request to request info from domain
request(domain, (error, response, body) => {
  fs.writeFile(fileName, body, (err) => { //write data to file name - data is body - if encountered error - throw an error
    if(err){
      throw err;
    }
    fs.stat(fileName, (err, stats) => { // enter object of fileName stats// if error throw error // otherwise extract stats
      if(err){
        throw err;
      } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${fileName}`);
      }
    });
  });
});