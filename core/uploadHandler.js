const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {validEvidenceFileFormat, errorMessages} = require('./constants')

const uploadFolder = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (validEvidenceFileFormat.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error(errorMessages.fileTypeNotAllowed));
    }
};

const upload = multer({storage: storage, fileFilter: fileFilter});

module.exports = upload