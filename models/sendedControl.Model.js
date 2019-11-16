const mongoose = require('mongoose');

let SendedSchema = new mongoose.Schema({
	senderId:{
		type: String,
		required: true
	},
	Time:{
		type: String,
		required: true
	},
	Message:{
		type: String,
		required: true
	}
});

let Sended = mongoose.model('Sended',SendedSchema,'sendedControl');
module.exports = Sended; 