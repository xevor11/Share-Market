const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
   title:{

        user:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'User'
        },
        type:String,
        required: [true, 'Please add a text value']
    },

    description:{

        user:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'User'
        },
        type:String,
        required: [true, 'Please add a text value']
    }

    
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)