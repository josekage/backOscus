var mongoose = require ('mongoose');
	Schema = mongoose.Schema;

var planSchema = new Schema({
	name: {type:String},
	year: {type:Number},
	dateStart:{type:Date},
	dateEnd:{type:Date},
	planUpload :{type:String},
	auditor:{type:String},
	responsible:{type:String, default:'User'},
	visible:{type:String, default:"1"},
	dateCreation: {type:Date, default: Date.now},
})
planSchema.methods.setExcelUrl = function setExcelUrl(filename) {
	this.planUpload = `/public-excel/${filename}`
}
module.exports = mongoose.model('Plan', planSchema);