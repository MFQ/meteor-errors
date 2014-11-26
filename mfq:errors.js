Errors = {
  // Local (client-only ) collection
  collection: new Mongo.Collection("errors"),
  throw: function(message){
    Errors.collection.insert({message: message, seen:false});
  }
}

if (Meteor.isServer) {
    Meteor.publish('errors', function(){
      return Errors.collection.find();
    });
}

if(Meteor.isClient){
  Meteor.subscribe('errors');
}