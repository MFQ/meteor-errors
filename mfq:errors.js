// Write your package code here!

Errors = {
  // Local (client-only ) collection
  collection: new Mongo.collection(null),
  throw: function(message){
    Errors.collection.insert(message: message, seen:false);
  }
}