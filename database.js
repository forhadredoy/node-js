
//finddata

function findwithoutCondition (MYMongoclient){
  var MyDatabase = MYMongoclient.db("school");

  var MyCollection = MyDatabase.collection("students");

  MyCollection.find().toArray(function (err,result){
    console.log(result);


  })
}

function findProjection(MYMongoclient){
    var MyDatabase = MYMongoclient.db("school");
  
    var MyCollection = MyDatabase.collection("students");
    var myObj = {};
   var  myProjection = {projection:{rool:1}};
  
    MyCollection.find(myObj,myProjection).toArray(function (err,result){
      console.log(result);
  
  
    })
  }
  //query

  function query (MYMongoclient){
    var MyDatabase = MYMongoclient.db("school");
  
    var MyCollection = MyDatabase.collection("students");
    var query = {ag,city:"dhaka"};
  
  
    MyCollection.find(query).toArray(function (err,result){
      console.log(result);
  
  
    })
  }
  module.exports =

   