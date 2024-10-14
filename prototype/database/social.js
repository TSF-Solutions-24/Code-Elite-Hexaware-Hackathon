const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const upload = multer();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/SkillPlus-Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const SocialConnectSchema = new mongoose.Schema({
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
});

const SocialConnect = mongoose.model('SocialConnect', SocialConnectSchema);

// API endpoint to handle form submissions
app.post('/submit-socialconnect', upload.none(), async (req, res) => {
  const { linkedin, github } = req.body;

  try {
    const social = new SocialConnect({
      linkedin,
      github,
    });

    await social.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving form data' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
