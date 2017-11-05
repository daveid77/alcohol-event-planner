USE alcohol_db;

INSERT INTO Events (type) VALUES ('Birthday Party');
INSERT INTO Events (type) VALUES ('Dinner Party');
INSERT INTO Events (type) VALUES ('Company Party');
INSERT INTO Events (type) VALUES ('Football Party');
INSERT INTO Events (type) VALUES ('Holiday Party');
INSERT INTO Events (type) VALUES ('Housewarming Party');
INSERT INTO Events (type) VALUES ('Cocktail Party');


INSERT INTO Alcohol (type,name,image) VALUES ("Spirits","Forty Creek Barrel Select Whisky
","https://dx5vpyka4lqst.cloudfront.net/products/8805/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Spirits","Crown Royal Whisky
","https://dx5vpyka4lqst.cloudfront.net/products/114694/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Beer","Coors Light
","https://dx5vpyka4lqst.cloudfront.net/products/906560/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Wine","Jackson-Triggs Pinot Grigio Bag in Box
","https://dx5vpyka4lqst.cloudfront.net/products/270959/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Beer","Labatt Blue","https://dx5vpyka4lqst.cloudfront.net/products/900480/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Wine","Jackson-Triggs Cabernet Sauvignon Bag in Box
","https://dx5vpyka4lqst.cloudfront.net/products/270884/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Spirits","J.P. Wiser's Deluxe Whisky
","https://dx5vpyka4lqst.cloudfront.net/products/893/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Beer","Heineken","https://dx5vpyka4lqst.cloudfront.net/products/337949/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Spirits","Smirnoff Vodka
","https://dx5vpyka4lqst.cloudfront.net/products/38505/images/thumb.png");
INSERT INTO Alcohol (type,name,image) VALUES ("Wine","French Cross Dry White Bag in Box
","https://dx5vpyka4lqst.cloudfront.net/products/589051/images/thumb.png");

-- THIS IS A TEST USER AND CAN BE DELETED WHEN USER ROUTES SET
INSERT INTO Users (username,password) VALUES ("Jane","1234");
INSERT INTO Users (username,password) VALUES ("John","1234");

-- SEEDS FOR EVENT FILTER TABLE
-- Event Table Key:    1 - Birthday Party; 2 - Dinner Party; 3 - Company Party; 
--                     4 - Football Party; 5 - Holiday Party;
--                     6 - Housewarming Party; 7 - Cocktail Party
-- ________________________________________________________________________________________

-- Alcohol Table Key:  1 - Beer; Wine - 2; Spirits - 3          

INSERT INTO EventFilter (event,alcohol) VALUES ("1","1");
INSERT INTO EventFilter (event,alcohol) VALUES ("1","2");
INSERT INTO EventFilter (event,alcohol) VALUES ("2","1");
INSERT INTO EventFilter (event,alcohol) VALUES ("2","2");
INSERT INTO EventFilter (event,alcohol) VALUES ("3","2");
INSERT INTO EventFilter (event,alcohol) VALUES ("3","3");
INSERT INTO EventFilter (event,alcohol) VALUES ("4","1");
INSERT INTO EventFilter (event,alcohol) VALUES ("5","1");
INSERT INTO EventFilter (event,alcohol) VALUES ("5","2");
INSERT INTO EventFilter (event,alcohol) VALUES ("5","3");
INSERT INTO EventFilter (event,alcohol) VALUES ("6","1");
INSERT INTO EventFilter (event,alcohol) VALUES ("6","2");
INSERT INTO EventFilter (event,alcohol) VALUES ("6","3");
INSERT INTO EventFilter (event,alcohol) VALUES ("7","3");
