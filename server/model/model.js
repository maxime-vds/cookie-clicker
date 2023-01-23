const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user: {
        required: true,
        type: String
    },
    totalcookies: {
        type: Number,
        default: 0
    },
    cookies: {
        type: Number,
        default: 0
    },
    multiplier: {
        amount:{
            type:Number,
            default: 1
        },
        price:{
            type: Number,
            default:10
        }
    },
    automater: {
        amount:{
            type: Number,
            default: 0
        },
        price:{
            type:Number,
            default:10
        }
    },
    boosters: {
        amount:{
            type: Number,
            default: 0
        },
        price:{
            type: Number,
            default:10
        },
        active:{
            type: Boolean,
            default: false
        }
    }
})

module.exports = mongoose.model('Data', dataSchema)