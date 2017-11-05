// var mysql = require("mysql");
var request = require("request");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Snowboarder1$",
  database: "alcohol_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

    function getLcboData() {

    var qUrl = "https://lcboapi.com/products?per_page=100&access_key=MDpjOTBmZTUyMC1jMWNiLTExZTctYjg4MC02YmZmM2Y5NTY3NDE6VkxhMzdqNHcweFNhRkJrb3cyYXFpZVFxYW5JaklkUWZ4TDV5";


    request.get(qUrl, function(error, response,body){
      
        if (error) throw error;
        var objBody = JSON.parse(body);
        var data = objBody.result;

       var arrayOfAlcohols = [];
        
        for(var i = 0; i < data.length; i++) {
         
         var query = connection.query(
          "INSERT INTO Alcohol SET ?",
          {
            type: data[i].primary_category,
            name: data[i].name,
            image: data[i].image_thumb_url,
            tag: data[i].tags
          },function(err,res) {
            if (err) throw err;
            else  {
              console.log(res.affectedRows + " product inserted!\n");
            };
          })
        }
      });
}  

getLcboData();
    