# alcohol-event-planner

## User Story

As a person who attends events often, sometimes I am unsure of what alcohol is appropriate to bring given an event. And sometimes I have no time for research and want something on the fly.

## Synopsis

this.event:choice is an application that will allow users to select a chosen event and render a curated list of wines, spirits, and beers based on the event. The user can then compile a list of their selections, and save their list for later

## Motivation

Instead of the going throught the hassle of decision making when going to an event, it would be great to have an app that would automatically make the decision for us

## Technologies:

* Express.js
* Node.js
* Sequelize.js- Models
* Handlebars.js - Rendering
* HTML5- Front-End Scripting
* CSS- Front-End Scripting
* Javascript- Back-End Scripting
* mySQL- Database Management
* mySQL2- Database Management

## Visual Application Walkthrough

## Code Examples

### LCBO

```
var request = require("request");
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Candelabra01!",
  database: "alcohol_db"
});

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

```

###
## Installation

1. Clone repo:

    ```
    git clone https://github.com/dbmarshall/alcohol-event-planner/
    cd /alcohol-event-planner/
    ```

2. Create new local config file:

    ```
    cd /alcohol-event-planner/config/
    cp config-BKUP.json config.json
    ```

    Update mysql references in new `config.json` file to match your local environment.

3. Create database in MySQL: 

    ```
    cd /alcohol-event-planner/db/
    mysql -u root -p
    source schema.sql;
    exit;
    ```

4. Start server to create tables from models:

    ```
    cd /alcohol-event-planner/
    node server.js
    ```
5. Populate Alcohol table with data from LCBO API: 

    ```
    cd db/
    cp lcbo-BKUP.js lcbo.json
    ```

    Update mysql references in new `lcbo.js` file to match your local environment.

    Run `node lcbo.js`


6. Populate tables with data in MySQL: 

    ```
    cd db/
    mysql -u root -p
    source seeds.sql;
    exit;
    ```


7. Create new Google oAuth config file:

    ```
    cd config/
    cp keys-BKUP.js keys.json
    ```

    Update mysql references in new `keys.js` file to match your local environment.

## Available Node Commands and URLs

**Local:** 

* Run `node server.js` 
* Then load [http://localhost:3000/](http://localhost:3000/)

**Heroku Deployment:** 

* Load [https://alcohol-event-planner.herokuapp.com/](https://alcohol-event-planner.herokuapp.com/)

## Misc Notes

* Github master branch pushes autodeploy to Heroku (sweet).

## Authors

* **Josh Siverson** ([siverson90.github.io](https://siverson90.github.io))
* **Mike Murphy** ([github.com/Brainstorm-Chaser](https://github.com/Brainstorm-Chaser))
* **David Morse** ([dbmarshall.github.io](https://dbmarshall.github.io))
* **Yolisa Bam** ([yolisabam.github.io](https://yolisabam.github.io))
* **Brandon Lee** ([github.com/blee2322](https://github.com/blee2322))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

