USE alcohol_db;

INSERT INTO Events (type) VALUES ('Birthday Party');
INSERT INTO Events (type) VALUES ('Dinner Party');
INSERT INTO Events (type) VALUES ('Company Party');
INSERT INTO Events (type) VALUES ('Football Party');
INSERT INTO Events (type) VALUES ('Holiday Party');
INSERT INTO Events (type) VALUES ('Housewarming Party');
INSERT INTO Events (type) VALUES ('Cocktail Party');

-- THESE ARE TEST USERS AND CAN BE DELETED WHEN USER ROUTES SET
INSERT INTO Users (name,googleID) VALUES ("Jane","1234");
INSERT INTO Users (name,googleID) VALUES ("John","1234");
       
-- Birthday Party
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (1,"1");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (2,"1");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (3,"1");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (66,"1");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (67,"1");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (75,"1");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (49,"1");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (52,"1");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (46,"1");

-- Dinner Party
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (2,"2");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (9,"2");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (13,"2");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (66,"2");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (67,"2");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (80,"2");

-- Company party
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (98,"3");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (67,"3");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (85,"3");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (52,"3");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (76,"3");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (81,"3");

-- Football Party
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (89,"4");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (97,"4");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (72,"4");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (70,"4");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (44,"4");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (25,"4");

-- Holiday Party
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (30,"5");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (86,"5");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (92,"5");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (91,"5");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (73,"5");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (18,"5");

-- Housewarming party
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (76,"6");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (82,"6");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (32,"6");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (66,"6");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (75,"6");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (80,"6");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (71,"6");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (65,"6");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (43,"6");

-- Cocktail party
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (81,"7");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (100,"7");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (46,"7");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (29,"7");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (73,"7");
INSERT INTO EventAlcohols (AlcoholId,EventId) VALUES (43,"7");