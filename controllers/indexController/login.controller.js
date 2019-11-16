module.exports.getLogin = (req,res)=>{
	res.render('login',{
		Errors: []
	});
}
module.exports.postLogin = (req,res)=>{
	res.redirect('/');
}