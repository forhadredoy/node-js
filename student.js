

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb.net/school";
const school =("school")



    
    var createAndShow=((data)=>{
      


      MongoClient.connect(url, function(err,db) {

        if (err) throw error
        else{
          console.log("database created")
        }

        let MyDatabase = db.db(school);   
        let MyCollection = MyDatabase.collection("students");

        MyCollection.insertOne(data,function(err){

          if(err){
            console.log("data insert failed")
          }
          else{
            console.log("data insert success");
       
          }
          db.close();
        })
        
        var query = {};
  
  
        MyCollection.find(query).toArray(function (err,result){
          console.log(result);
      

    })


      })
        
      
    })
   
  


  module.exports ={createAndShow}


   