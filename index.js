const fs = require("fs");
const process = require('process');
  
fs.readdir(process.argv[2],{withFileTypes:true},function(err,files){
    if (err) throw err;
    console.log(files);
})
