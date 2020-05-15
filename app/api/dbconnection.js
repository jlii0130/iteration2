const express = require("express");
const app = express();

const mysql = require('mysql');
const databaseOptions = require('../config/mysqlconn');

//method to get data for the new farmer
app.get("/get/:fruitname/:farmsize", (req, res) => {
    //var location = req.params.location
    var fruitname = req.params.fruitname
    var farmsize = req.params.farmsize

    const connection = mysql.createConnection(databaseOptions);

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('successfully connected as id ' + connection.threadId);

        //write query
        const query = 
        "SELECT `Preventive Measure`, `Preventive Desc` " +
        "FROM `Preventive` " +
        "JOIN `Preventive_Fact_Table` ON Preventive.`Preventive_ID` = Preventive_Fact_Table.`Preventive_ID` "+
        "JOIN `Fruit` ON `Fruit`.`Fruit_ID` = Preventive_Fact_Table.`Fruit_ID` " +
        "WHERE `Fruit`.`Fruit_Name` = '" + fruitname + "' AND (`Preventive`.`Farm_Size_Min` < " + farmsize + " OR `Preventive`.`Farm_Size_Max` > " + farmsize + ");" 

        connection.query(query,function (err, result) {
            if (err){
                res.json(err);
            }else {
                console.log(result);
                res.json(result);
            }
        });
    });
});


//for the exsiting farmer get the mitigation method
app.get("/get2/:temp", (req, res) => {
    //var location = req.params.location
    var temp = req.params.temp

    const connection = mysql.createConnection(databaseOptions);

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('successfully connected as id ' + connection.threadId);

        //write query
        const query = 
        "Select count(*) from Temperature_season where `Temp_ID` = (select extract(month from current_timestamp))" +
        "and `Low_temp` < " + temp + " and `High_temp` > " + temp;

        connection.query(query,function (err, result) {
            if (err){
                res.json(err);
            }else {
                console.log(result);
                res.json(result);
            }
        });
    });
});

//get the mitigation method
app.get("/get3/:farmstage", (req, res) => {
    var farmstage = req.params.farmstage
    

    const connection = mysql.createConnection(databaseOptions);

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('successfully connected as id ' + connection.threadId);

        //write query
        const query = 
        "SELECT `Control Measure`, `Control Desc`, `Control Application` FROM `Control`" +
        "JOIN `harvest_control` ON `Control`.`Control ID` = `harvest_control`.`Control ID`" + 
        "JOIN `Harvest` on `Harvest`.`Harvest ID` = `harvest_control`.`Harvest ID`" +
        "WHERE `Harvest`.`Harvest Stage`= '" + farmstage + "';"

        connection.query(query,function (err, result) {
            if (err){
                res.json(err);
            }else {
                console.log(result);
                res.json(result);
            }
        });
    });
});


//get the precautionary method
app.get("/get4/:farmstage", (req, res) => {
    var farmstage = req.params.farmstage
    

    const connection = mysql.createConnection(databaseOptions);

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('successfully connected as id ' + connection.threadId);

        //write query
        const query = 
        "SELECT `Preventive Measure`, `Preventive Desc`, `Preventive Application` FROM `Preventive`" + 
        "JOIN `harvest_preventive` ON `Preventive`.`Preventive_ID` = `harvest_preventive`.`Preventive_ID`" +
        "JOIN `Harvest` on `Harvest`.`Harvest ID` = `harvest_preventive`.`Harvest ID`" +
        "WHERE `Harvest`.`Harvest Stage` = '" + farmstage + "';"

        connection.query(query,function (err, result) {
            if (err){
                res.json(err);
            }else {
                console.log(result);
                res.json(result);
            }
        });
    });
});

app.get("/get5/:fruit", (req, res) => {
    var fruit = req.params.fruit
    

    const connection = mysql.createConnection(databaseOptions);

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('successfully connected as id ' + connection.threadId);

        //write query
        const query = 
        "SELECT `Control Measure`, `Control Desc`, `Control Application` FROM `Control`" +
        "JOIN `Control_Fact_Table` ON `Control`.`Control ID` = `Control_Fact_Table`.`Control ID`" +
        "JOIN `Fruit` ON `Fruit`.`Fruit_ID` = `Control_Fact_Table`.`Fruit_ID`" +
        "WHERE `Fruit`.`Fruit_Name` = '" + fruit + "';"
        console.log(query)
        connection.query(query,function (err, result) {
            if (err){
                res.json(err);
            }else {
                console.log(result);
                res.json(result);
            }
        });
    });
});


module.exports = app;
