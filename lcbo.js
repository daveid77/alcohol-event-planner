var request = require("request");
var mysql = require("mysql2");

// ALTERNATE CONNECTIONS FOR HEROKU/JAWS and LOCAL ENV
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: "root",
    password: "root",
    database: "alcohol_db"
  });
}
// VERSION FOR LOCAL ENVIRONMENT ONLY
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "alcohol_db"
// });

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

function getLcboData() {

  var qUrl = "https://lcboapi.com/products?per_page=100&access_key=MDpjOTBmZTUyMC1jMWNiLTExZTctYjg4MC02YmZmM2Y5NTY3NDE6VkxhMzdqNHcweFNhRkJrb3cyYXFpZVFxYW5JaklkUWZ4TDV5";

  request.get(qUrl, function(error, response,body) {

  if (error) throw error;
  
  var objBody = JSON.parse(body);
  var data = objBody.result;

  var arrayOfAlcohols = [];
  
  for(var i = 0; i < data.length; i++) {
    var beerBool = false;
    var liquirBool = false;
    var wineBool = false;

    if (data[i].primary_category === "Beer") {
      beerBool = true;
    } else if (data[i].primary_category === "Spirits") {
      liquirBool = true;
    } else if(data[i].primary_category === "Wine") {
      wineBool = true;
    }

    arrayOfAlcohols.push(
      [
        data[i].primary_category,
        data[i].name,
        data[i].image_thumb_url,
        data[i].tags,
        beerBool,
        liquirBool,
        wineBool
      ]
    );
  };

  var query = 'INSERT INTO Alcohol (type, name, image, tag, beerBool,liquirBool, wineBool) VALUES ?';
    connection.query(query, [arrayOfAlcohols], 
      function(err, res) {
      if (err) throw err;
        console.log(res.affectedRows + " products inserted!\n");
        connection.end();
    });
  });

}  

getLcboData();

