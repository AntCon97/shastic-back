const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'Please add an ID'],
        
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: false,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
      },
      number: {
        unique: false,
        type: Number,
        required: [true, 'Please add a number'],
        trim: true,
        
    
      },
})


module.exports = mongoose.model('Contact', ContactSchema)