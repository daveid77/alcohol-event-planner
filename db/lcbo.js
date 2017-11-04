var mysql = require("mysql");
var request = require("request");

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

    console.log("button works");

    var url = "http://lcboapi.com/products?page=2&access_key=";

    var api_key = "MDplMTI2NmVjYS1iZmYyLTExZTctOGU0NC04MzNjNzk5NzRlMzk6SnRYZWRMTzRENnh4SlJHbjVPWGhWZ1RNU1JIQUNlVUY2bVlS"
    
    var queryURL = url + api_key;

    request(queryURL, function(error, response,body){

      if (!error && response.statusCode === 200){

        var objBody = JSON.parse(body);

        connection.log(objBody);
      }
    });
  }

  getLcboData();

    
    

    // console.log(queryURL);


    //   var lcboObj = response.result;

    //   var arrayOfLcboResults = [];

    //   for (var i = 0; i < lcboObj.length; i++) {
    //     var obj = {
    //       "type":lcboObj[i].primary_category,
    //       "name":lcboObj[i].name,
    //       "image":lcboObj[i].image_thumb_url
    //     };
    //     arrayOfLcboResults.push(obj);
    //   }
    //   // postLcboData(arrayOfLcboResults);
    // };// end of AJAX
     // end of on #lcbo-dat on click listener

  // function postLcboData(lcboData){
  //   console.log("in function");
  //   console.log(lcboData);

  //   var lcboObj = {"data": lcboData}

  //   $.ajax("/api/lcbo", {
  //     type: "POST",
  //     data: lcboData
  //   }).then(function(){
  //     console.log("response hit");
  //   });
  // }