var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/alejandro', (req, res, next) => {
  res.send({
    nombre: 'Alejandro Quintero Sanchez',
    age: '31',
    curso: 'Curso de Express JS',
    section: 'Learning about Express Application Generator',
    sons: 'two dauthers'
  })
})

module.exports = router;
