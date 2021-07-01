var mongoose = require ('mongoose');
	Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {type:String},
	email: {type:String},
	type: {type:String}, // 1 Admin, 2 revisador, 3 participantes
	phone: {type:String},
	position: {type:String},
	department: {type:String},
	description: {type:String},
	photo:{type:String},
	visible:{type:String, default:"1"},
	f_creacion: {type:Date, default: Date.now},
})

module.exports = mongoose.model('Users', userSchema);