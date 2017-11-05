USE alcohol_db;

INSERT INTO Events (type) VALUES ('Birthday Party');
INSERT INTO Events (type) VALUES ('Dinner Party');
INSERT INTO Events (type) VALUES ('Company Party');
INSERT INTO Events (type) VALUES ('Football Party');
INSERT INTO Events (type) VALUES ('Holiday Party');
INSERT INTO Events (type) VALUES ('Housewarming Party');
INSERT INTO Events (type) VALUES ('Cocktail Party');


-- THIS IS A TEST USER AND CAN BE DELETED WHEN USER ROUTES SET
INSERT INTO Users (username,password) VALUES ("Jane","1234");
INSERT INTO Users (username,password) VALUES ("John","1234");
       
-- Birthday Party
INSERT INTO EventFilters (event,type, name) VALUES ("1","Beer",1);
INSERT INTO EventFilters (event,type, name) VALUES ("1","Beer",2);
INSERT INTO EventFilters (event,type, name) VALUES ("1","Beer",3);
INSERT INTO EventFilters (event,type, name) VALUES ("1","Wine",66);
INSERT INTO EventFilters (event,type, name) VALUES ("1","Wine",67);
INSERT INTO EventFilters (event,type, name) VALUES ("1","Wine",75);
INSERT INTO EventFilters (event,type, name) VALUES ("1","Spirits",49);
INSERT INTO EventFilters (event,type, name) VALUES ("1","Spirits",52);
INSERT INTO EventFilters (event,type, name) VALUES ("1","Spirits",46);


-- Dinner Party
INSERT INTO EventFilters (event,type, name) VALUES ("2","Beer",2);
INSERT INTO EventFilters (event,type, name) VALUES ("2","Beer",9);
INSERT INTO EventFilters (event,type, name) VALUES ("2","Beer",13);
INSERT INTO EventFilters (event,type, name) VALUES ("2","Wine",66);
INSERT INTO EventFilters (event,type, name) VALUES ("2","Wine",67);
INSERT INTO EventFilters (event,type, name) VALUES ("2","Wine",80);
-- No spirits for Dinner party
-- INSERT INTO EventFilters (event,type, name) VALUES ("2","Spirits");
-- INSERT INTO EventFilters (event,type, name) VALUES ("2","Spirits");
-- INSERT INTO EventFilters (event,type, name) VALUES ("2","Spirits");

-- Company party
INSERT INTO EventFilters (event,type, name) VALUES ("3","Wine",98);
INSERT INTO EventFilters (event,type, name) VALUES ("3","Wine",67);
INSERT INTO EventFilters (event,type, name) VALUES ("3","Wine",85);
INSERT INTO EventFilters (event,type, name) VALUES ("3","Spirits",52);
INSERT INTO EventFilters (event,type, name) VALUES ("3","Spirits",76);
INSERT INTO EventFilters (event,type, name) VALUES ("3","Spirits",81);

-- Football Party
INSERT INTO EventFilters (event,type, name) VALUES ("4","Beer",89);
INSERT INTO EventFilters (event,type, name) VALUES ("4","Beer",97);
INSERT INTO EventFilters (event,type, name) VALUES ("4","Beer",72);
INSERT INTO EventFilters (event,type, name) VALUES ("4","Beer",70);
INSERT INTO EventFilters (event,type, name) VALUES ("4","Beer",44);
INSERT INTO EventFilters (event,type, name) VALUES ("4","Beer",25);

-- Holiday Party
INSERT INTO EventFilters (event,type, name) VALUES ("5","Wine",30);
INSERT INTO EventFilters (event,type, name) VALUES ("5","Wine",86);
INSERT INTO EventFilters (event,type, name) VALUES ("5","Wine",92);
INSERT INTO EventFilters (event,type, name) VALUES ("5","Spirits",91);
INSERT INTO EventFilters (event,type, name) VALUES ("5","Spirits",73);
INSERT INTO EventFilters (event,type, name) VALUES ("5","Spirits",18);

-- Housewarming party
INSERT INTO EventFilters (event,type, name) VALUES ("6","Beer",76);
INSERT INTO EventFilters (event,type, name) VALUES ("6","Beer",82);
INSERT INTO EventFilters (event,type, name) VALUES ("6","Beer",32);
INSERT INTO EventFilters (event,type, name) VALUES ("6","Wine",66);
INSERT INTO EventFilters (event,type, name) VALUES ("6","Wine",75);
INSERT INTO EventFilters (event,type, name) VALUES ("6","Wine",80);
INSERT INTO EventFilters (event,type, name) VALUES ("6","Spirits",71);
INSERT INTO EventFilters (event,type, name) VALUES ("6","Spirits",65);
INSERT INTO EventFilters (event,type, name) VALUES ("6","Spirits",43);

-- Cocktail party
INSERT INTO EventFilters (event,type, name) VALUES ("7","Spirits",81);
INSERT INTO EventFilters (event,type, name) VALUES ("7","Spirits",100);
INSERT INTO EventFilters (event,type, name) VALUES ("7","Spirits",46);
INSERT INTO EventFilters (event,type, name) VALUES ("7","Spirits",29);
INSERT INTO EventFilters (event,type, name) VALUES ("7","Spirits",73);
INSERT INTO EventFilters (event,type, name) VALUES ("7","Spirits",43);