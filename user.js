var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	username: String,
	password: String,
	passwordConf: String,
	address1: String,
	address2: String
}),
User = mongoose.model('User', userSchema);

module.exports = User;
models/user.js

// const User = sequelize.define('User', {
// 	username: {
// 	  type: DataTypes.STRING,
// 	  allowNull: false,
// 	  unique: true
// 	},
// 	password: {
// 	  type: DataTypes.STRING,
// 	  allowNull: false
// 	},
// 	address1: {
// 	  type: DataTypes.STRING,
// 	  allowNull: false
// 	},
// 	address2: {
// 	  type: DataTypes.STRING,
// 	  allowNull: false
// 	}
//   });
  
//   const Account = sequelize.define('Account', {
// 	accname: {
// 	  type: DataTypes.STRING,
// 	  allowNull: false,
// 	  unique: true
// 	},
// 	balance: {
// 	  type: DataTypes.INTEGER,
// 	  allowNull: false
// 	}
//   });
