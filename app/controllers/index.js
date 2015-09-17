/**
 * Module dependencies.
 *  */

module.exports.index = function (req, res) {
  res.send('Hello World\n');
}

module.exports.test1 = function (req, res) {
  res.send({
    name: "Caio Lima",
    age: 22
  })
}

