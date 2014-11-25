Template._errors.helpers({
  errors: function(){
    return Errors.collection.find();
  }
});

Template._error.rendered = function() {
  var error = this.data;
  Meteor.setTimeout(function () {
    Errors.collection.remove(error._id);
  }, 3000);
}