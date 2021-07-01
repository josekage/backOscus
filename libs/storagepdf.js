const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './excel')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.xlsx`)
    }
});
   
const upload = multer({ storage });

module.exports = upload;