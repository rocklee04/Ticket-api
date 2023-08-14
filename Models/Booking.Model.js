const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Flight',
    }
})    

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;