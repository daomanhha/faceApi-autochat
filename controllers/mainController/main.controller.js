const Admin = require('../../models/admin.Model');
const axios = require('axios');
const senderId = require('../../models/senderId.Model');
const sended = require('../../models/sendedControl.Model');
module.exports.getMain = async (req, res)=>{
	let id = req.signedCookies.id;
	const adminFinded = await Admin.findOne({_id:id});
	res.render('main',{
		name: adminFinded.name
	});
}
module.exports.postMain = async (req,res)=>{
	const accessToken = req.body.accessToken;
	const message = req.body.message;
	const Converstations = await senderId.find();
	if(Converstations){
		for(const Converstation of Converstations){
			const id = Converstation.senderId;
			await sendMessage(accessToken, id, message);
			let current = new Date();
 			await sended.create({
				senderId: id,
				Time: current.getTime(),
				Message: message
			});
		}
	}
	res.status(200).send('done!');
}

function sendMessage(token, senderId, message){
	url = `https://graph.facebook.com/me/messages?access_token=${token}`;
	data = {	
	    "recipient":{
	        "id": senderId
	    },
	    "message":{
	        "text": message
	    }
	}
	return axios.post(url, data);
}