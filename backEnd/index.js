const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    
    const originalName = file.originalname;
    const imageName = originalName.substring(0, originalName.lastIndexOf('.'));
    console.log( req .file)
    const extension = path.extname(file.originalname);
    const fullFileName = `${imageName}${extension}`;
    cb(null, fullFileName);
  },
});

const upload = multer({ storage: storage });


app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});


app.get('/image/:name', (req, res) => {
  const imageName = req.params.name;
  const imagePath = path.join(__dirname, 'uploads', imageName);


  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.status(404).send('Image not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
