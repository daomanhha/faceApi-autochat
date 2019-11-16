const Admin = require('../../models/admin.Model');
module.exports.getLogin = (req,res)=>{
	res.render('login',{
		Errors: [],
		csrfToken : req.csrfToken()
	});
}
module.exports.postLogin = async (req, res)=>{
	let adminFinded = await Admin.findOne({email:req.body.email});
	res.cookie('id', adminFinded._id, {signed:true});
	res.redirect('/main');
}
module.exports.getLogout = async (req, res)=>{
	res.cookie('id', '', {signed: true});
	res.redirect('/login');
}