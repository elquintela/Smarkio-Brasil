module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  comentario: {
		  type: Sequelize.STRING
	  }
	});
	
	return User;
}