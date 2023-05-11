const multer = require('multer');

// Define the storage configuration for Multer
const storage = multer.diskStorage({
  destination: './uploads',  // Specify the folder where uploaded files will be stored
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix); // Set the filename for the uploaded file
  }
});


const upload = multer({ storage: storage });

// Export the upload middleware
module.exports = upload;
