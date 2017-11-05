# alcohol-event-planner

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

5. Populate tables with data in MySQL: 

    ```
    cd /alcohol-event-planner/db/
    mysql -u root -p
    source seeds.sql;
    exit;
    ```

6. Populate Alcohol table with data from LCBO API: 

    `cd /alcohol-event-planner/db/`

    Update mysql references in `lcbo.js` file to match your local environment.

    Run `node lcbo.js`

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

