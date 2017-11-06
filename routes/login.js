var db = require('../models');

module.exports = function(app) {


app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

 function doGet() {
   var app = UiApp.createApplication();
   var form = app.createFormPanel();
   var flow = app.createFlowPanel();
   flow.add(app.createTextBox().setName("textBox"));
   flow.add(app.createSubmitButton("Submit"));
   form.add(flow);
   app.add(form);
   return app;
 }

  function doPost(eventInfo) {
   var app = UiApp.getActiveApplication();
   app.add(app.createLabel("Form submitted. The text box's value was '" +
       eventInfo.parameter.textBox + "'"));
   return app;
 }

};


