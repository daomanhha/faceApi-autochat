module.exports.getLogin = (req,res)=>{
	res.render('login',{
		Errors: [],
		csrfToken : req.csrfToken()
	});
}
module.exports.postLogin = (req,res)=>{
	res.redirect('/');
}