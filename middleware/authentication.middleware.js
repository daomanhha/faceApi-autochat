const Admin = require('../models/admin.Model');

module.exports.authenticationLogin = async (req, res, next)=>{
	if(!req.signedCookies.id){
		res.redirect('/login');
		return;
	}
	let AdminFinded = await Admin.findOne({_id: req.signedCookies.id});
	if(!AdminFinded){
		res.redirect('/login');
		return;
	}
	next();
}
module.exports.authenticationLoginOut = async (req, res, next)=>{
	if(req.signedCookies.id){
		res.redirect('/main');
		return;
	}
	next();
}