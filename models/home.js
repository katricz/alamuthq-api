
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var home = new Schema({
    icon1st: {
        type: String
    },

    title1st: {
        type: String
    },

    example1st: {
        type: String
    },
    icon2nd: {
        type: String
    },

    title2nd: {
        type: String
    },

    example2nd: {
        type: String
    },
    icon3rd: {
        type: String
    },

    title3rd: {
        type: String
    },

    example3rd: {
        type: String
    },
},
    {
        timestamps: true
    }
);

mongoose.model('Home', home);
