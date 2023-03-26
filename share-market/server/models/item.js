const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
=======
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
