const bcrypt = require('bcrypt');
const Admin = require('../models/admin.Model');


module.exports.loginValidate = async function(req, res, next){
	let email = req.body.email;
	let password =  req.body.passWord;
	let Errors = [];
	let adminFinded = await Admin.findOne({email:email});
	if(!adminFinded){
		Errors.push('Email không chính xác');
		res.render('login',{
			Errors,
			csrfToken : req.csrfToken()
		});
		return;
	}
	if(!bcrypt.compareSync(password, adminFinded.password)){
		Errors.push('Mật khẩu không chính xác');
		res.render('login',{
			Errors,
			csrfToken : req.csrfToken()
		});
		return;
	}
	next();
} 