var mongo = require('mongodb').MongoClient
var database = process.argv[2]
var url = 'mongodb://localhost:27017/'

mongo.connect(url + database, function (err, db) {
  if (err) throw err
  var users = db.collection('users')
  users.update({
    name: 'Tina'
  }, {
    $set: {
      age: 40
    }
  }, function (err, data) {
    if (err) throw err
  })
  db.close()
})
