const path=require('path')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `uploads/`);
    
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname;
    const imageName = originalName.substring(0, originalName.lastIndexOf('.'));
    const extension = path.extname(file.originalname);
    const fullFileName = `${imageName}${extension}`;
    cb(null, fullFileName);
  },
});
const upload = multer({ storage: storage });

const uploadMiddleware = {
  handleUpload: upload.single('image'),
};

module.exports = uploadMiddleware;
