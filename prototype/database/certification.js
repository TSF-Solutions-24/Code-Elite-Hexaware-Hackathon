const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/SkillPlus-Users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a Mongoose schema
const CertificationSchema = new mongoose.Schema({
    certifications: { type: String, required: true },
    courses: { type: String, required: true },
    certificateFile: { type: String },
    internshipCompleted: { type: String, required: true },
    internshipCertificate: { type: String },
});

const Certification = mongoose.model('certificates', CertificationSchema);

app.post('/submit-certifications', upload.fields([
    { name: 'certificateFile', maxCount: 1 },
    { name: 'internshipCertificate', maxCount: 1 }
]), async (req, res) => {
    try {
        const { certifications, courses, internshipCompleted } = req.body;

        const certificateFile = req.files.certificateFile ? req.files.certificateFile[0].path : '';
        const internshipCertificate = req.files.internshipCertificate ? req.files.internshipCertificate[0].path : '';

        console.log('Form data:', req.body); // Log form data
        console.log('File paths:', certificateFile, internshipCertificate); // Log file paths

        const certification = new Certification({
            certifications,
            courses,
            certificateFile,
            internshipCompleted,
            internshipCertificate
        });

        await certification.save();
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error saving form data:', error); // Log detailed error
        res.status(500).json({ error: 'Error saving form data' });
    }
});


// Create an 'uploads' folder to store files
const fs = require('fs');
const path = require('path');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
