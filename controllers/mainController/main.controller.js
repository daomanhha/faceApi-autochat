const Admin = require('../../models/admin.Model');
module.exports.getMain = async (req, res)=>{
	let id = req.signedCookies.id;
	const adminFinded = await Admin.findOne({_id:id});
	res.render('main',{
		name: adminFinded.name
	});
}