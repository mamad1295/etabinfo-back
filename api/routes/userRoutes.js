'use strict';
module.exports = function(app) {
  var users = require('../controllers/userController');


  
  app.route('/users')
    .get(users.getAll)
    .post(users.create);


  app.route('/users/:userId')
    .get(users.getById)
    .put(users.update)
    .delete(users.delete);
};