//api-routes.js
//initialize express router
let router = require('express').Router();

//set default API response
router.get('/',function(req,res){
  res.json({
    status: 'API its working',
    message: 'Welcome to Resthub crafted!'
  });
});

//import mahasiswa controler
var mahasiswaControler = require('./mahasiswaControler');

//contact apiRoutes
router.route('/mahasiswa')
  .get(mahasiswaControler.index)
  .post(mahasiswaControler.new);

router.route('/mahasiswa/:mahasiswa1_id')
  .get(mahasiswaControler.view)
  .patch(mahasiswaControler.update)
  .put(mahasiswaControler.update)
  .delete(mahasiswaControler.delete);

//exports api
module.exports = router;
