const db = require('../config/db.config.js');
const User = db.user;
 
// Save FormData - User to MySQL
exports.save = (req, res) => {
	console.log('Post a Customer: ' + JSON.stringify(req.body));
	
	User.create({
		comentario: req.body.comentario,
	},{
		attributes: {include: ['comentario']}
	}).then(user => {
		res.send(user);
	})
};
 
// Fetch all Users
exports.findAll = (req, res) => {
	console.log("Get All Customers");
	User.findAll({
		attributes: ['id', 'comentario']
	}).then(users => {
	   res.send(users);
	});
};