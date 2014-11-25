Errors = {
  // Local (client-only ) collection
  collection: new Mongo.Collection("errors"),
  throw: function(message){
    Errors.collection.insert({message: message, seen:false});
  }
}