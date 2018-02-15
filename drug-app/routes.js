//SPDX-License-Identifier: Apache-2.0

var drug = require('./controller.js');

module.exports = function(app){

  app.get('/get_drug/:id', function(req, res){
    drug.get_drug(req, res);
  });
  app.get('/add_drug/:drug', function(req, res){
    drug.add_drug(req, res);
  });
  app.get('/get_all_drug', function(req, res){
    drug.get_all_drug(req, res);
  });
  app.get('/change_holder/:holder', function(req, res){
    drug.change_holder(req, res);
  });
}
