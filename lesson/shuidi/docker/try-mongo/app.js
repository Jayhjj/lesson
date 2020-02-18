const express = require('express');
var mongoose = require('mongoose');
// url  docker test 数据库
mongoose.connect('mongodb://mongodb/test')

const kittySchema = mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function() {
    var greeting = this.name ?
        'Meow name is' + this.name :
        console.log(gretting)
}
var Kitten = mongoose.model('Kitten', kittySchema);

const app = express();
app.get('/create', (req, res) => {
    var fluffy = new Kitten({
        name: 'fluffy'
    });
    fluffy.save(function(err, fluffy) {
        if (err) return console.log(err);
        fluffy.speak();
    })
})
app.get('/', (req, res) => {
        Kitten.find(function(err, kittens) {
            if (err) return console.log(err);
            res.send(kittens);
        });
    })
    // mongoose.connect('');
app.listen(3001, console.log('Example app listen on port 3001!'));