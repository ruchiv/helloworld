var XLSX = require('xlsx');
var fs = require("fs");
var workbook = XLSX.readFile("./resources/csa.xlsx");


var fm = workbook.Sheets["Framework Master"];

console.log(fm);
