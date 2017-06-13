/**
 * Created by adrianjez on 12.06.2017.
 */
var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
    rasa: {type:String, required : true },
    sredniWiekZycia: {type: String},
    cena: {type: Number},
    maksymalnaPredkoscBiegu: {type: Number},
    zdjecie: {type: String},
    opis:{type: String}
});

var Users = mongoose.model('dog', DogSchema);

module.exports = Users;