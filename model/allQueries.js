var connection = require("../config/connection");
module.exports.insert=function(collection_name,obj,cb){
    connection.init(function(err,client){
      var db = client.db("assignment");
  db.collection(collection_name).insert(obj,cb)
  });
  }
module.exports.find=function(collection_name,obj,cb){
    connection.init(function(err,client){
      var db = client.db("assignment");
  db.collection(collection_name).find(obj).toArray(cb);
  });
}