const senderId = require('../../models/senderId.Model');
module.exports.getWebHook = ( req, res)=>{
	if(req.query['hub.verify_token'] === process.env.WEBHOOK_CONFIRM){
		res.set({
			'Content-Type': 'text/plain'
		});
		res.send(req.query['hub.challenge']);
	}
	res.send('Error, wrong validation token');
}
module.exports.postWebHook =  async (req, res)=>{
	let entries = req.body.entry;
	for(let entry of entries){
		let messaging = entry.messaging;
		for(message of messaging){
			let id = await senderId.findOne({senderId: message.sender.id});
			if(!id){
				await senderId.create({senderId: message.sender.id });
			}
		}
	}
}