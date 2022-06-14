
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb.net/school";

MongoClient.connect(url, function(err,MYMongoclient) {
  if (err)
  {
    console.log("connection failed")

  }
  else{
    console.log("database create");

    InsertData(MYMongoclient);

    //DeleteData(MYMongoclient);

    //DeleteAll(MYMongoclient);
    
    findwithoutCondition (MYMongoclient)
    findwithCondition (MYMongoclient)
  }
 

});

//data insert


function InsertData(MYMongoclient){

  var MyDatabase = MYMongoclient.db("school");

 var MyCollection = MyDatabase.collection("students");

 var myData ={name:"omar faruk rahad", rool:1, age:16, city:"Amirabad"};
 var myData1 ={name:"sopoter rahman", rool:2, age:16, city:"banipur"};
 var myData2 = {name:"frome akther", rool:3, age:16, city:"amirabad"};
 var myData3 ={name:"forhad hossain redoy", rool:4, age:16, city:"nowri"};


 MyCollection.insertMany([myData,myData1,myData2,myData3], function(err){
   if(err){
     console.log("data insert failed")
   }
   else{
     console.log("data insert success");

   }
 });


}

//oneData deleted

function DeleteData(MYMongoclient){
  var MyDatabase = MYMongoclient.db("school");

  var MyCollection = MyDatabase.collection("students");

  DeleteItem = {rool:2};

  
  MyCollection.deleteOne( DeleteItem, function (err){
    if(err){
      console.log("database not deleted")
    }
    else{
      console.log("database deleted");
    }
  })
}
//all data deleted 
function DeleteAll(MYMongoclient){
  var MyDatabase = MYMongoclient.db("school");

  var MyCollection = MyDatabase.collection("students");
  
  MyCollection.deleteMany( function (err,resultObj){

    if(err){

      console.log("database not deleted")
    }

    else{

      console.log(resultObj);    }

  })

}
//find data without codition
function findwithoutCondition (MYMongoclient){
  var MyDatabase = MYMongoclient.db("school");

  var MyCollection = MyDatabase.collection("students");

  var findobject ={}

  MyCollection.find( findobject ,function (err,result){
    console.log(result);


  })

}
//findcondition
function findwithCondition (MYMongoclient){
  var MyDatabase = MYMongoclient.db("school");

  var MyCollection = MyDatabase.collection("students");

  var findobject ={rool:3}

  MyCollection.find( findobject ,function (err,result){
    console.log(result);


  })
}

