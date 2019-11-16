const mongoose = require('mongoose');

let SenderSchema = new mongoose.Schema({
	senderId:{
		type: String,
		required: true
	}
});

let Sender = mongoose.model('Sender',SenderSchema,'senderId');
module.exports = Sender; 