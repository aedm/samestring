import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.publish("containers", function() {
  return Containers.find();
});

Meteor.publish("pub/text", function() {
  return Texts.find(this.userId);
});