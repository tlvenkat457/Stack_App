/**
 * Created by venkat on 8/31/15.
 */


var express = require('express');
var path =require('path');


var app=express();
var rootPath = path.normalize(__dirname);

console.log('Root dir is '+rootPath);

app.use(express.static(rootPath));

app.listen(9999);
console.log('Server is up listening on 9999');
