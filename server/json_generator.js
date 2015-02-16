var XLSX = require('xlsx');
var fs = require("fs");
var workbook = XLSX.readFile("./resources/csa.xlsx");
var data = {};
for (var sheetName in workbook.Sheets){
  var sheet = workbook.Sheets[sheetName];
  var keys = {};
  var datamap = []; //list of object
  for (var z in sheet) {
    if(z[0] === '!') continue;
    var alpha = z.match(/([A-Z]+)/g)[0]
    var numeric = z.match(/(\d+)/g)[0] - 0
    if(numeric == 1){
      keys[alpha] = sheet[z].v;
    } else {
      datamap[numeric-2] = datamap[numeric-2] || {};
      datamap[numeric-2][keys[alpha]] = sheet[z].v;
    }
  }
  data[sheetName] = datamap;
}
fs.writeFile("./resources/seed.json", JSON.stringify(data, undefined, 4))
