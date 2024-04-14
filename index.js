var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://maju:bilal123456@cluster0.b4tlg0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

var myobj = [
     { "name": "Bilal", "address": "235 Maju hostel" },
 ];

 MongoClient.connect(url, function(err, db) {
     if (err) throw err;

     var database = db.db("MAJU");
     database.collection("Students").insertMany(myobj, function(error, result) {
         if (error) throw error;
         console.log("Data inserted");
         db.close();

     });
 });