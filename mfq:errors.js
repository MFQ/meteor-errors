Errors = {
  // Local (client-only ) collection
  collection: new Mongo.collection("errors"),
  throw: function(message){
    Errors.collection.insert(message: message, seen:false);
  }
}