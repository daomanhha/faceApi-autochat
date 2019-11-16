const mongoose = require('mongoose');

let SenderSchema = new mongoose.Schema({
	senderId:{
		type: String,
		required: true
	}
});

let Sender = mongoose.model('Sender',AdminSchema,'senderId');
module.exports = Admin; 