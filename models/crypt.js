var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var crypt = new Schema({
    cardName: {
        type: String
    },

    text: {
        type: String
    },

    image: {
        type: String
    }

},
    {
        timestamps: true
    }
);

mongoose.model("Crypt", crypt);