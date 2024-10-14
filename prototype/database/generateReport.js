const mongoose = require('mongoose');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/SkillPlus-Users', {  });

// Candidate schema
const CandidateSchema = new mongoose.Schema({
    degree: String,
    specification: String,
    certifications: String,
    certificateFile: String,
    internshipCompleted: String,
    internshipCertificate: String,
});

const Candidate = mongoose.model('Candidate', CandidateSchema, 'students');

// Function to generate random percentages
function generateRandomPercentage() {
    return Math.floor(Math.random() * 101); // Random number between 0 and 100
}

// Function to generate project evaluation score
function generateProjectEvaluationScore() {
    return Math.floor(Math.random() * 101); // Random number between 0 and 100
}

// Function to generate AI-based recommendations
function generateAIRecommendations(mcqScore) {
    if (mcqScore < 50) {
        return "Focus on Java basics, such as data types, loops, and control statements.";
    } else if (mcqScore < 75) {
        return "Work on intermediate Java concepts like collections, multithreading, and OOP principles.";
    } else {
        return "You're doing well! Consider advancing your knowledge on Java frameworks like Spring.";
    }
}
/*
// MCQ evaluation function (this would already exist in your codebase)
const evaluateTest = (questions, userAnswers) => {
    let totalScore = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    questions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correctAnswer;
        if (isCorrect) correctAnswers++;
        else incorrectAnswers++;

        if (isCorrect) {
            totalScore++;
        }
    });

    return { totalScore, correctAnswers, incorrectAnswers };
};
*/
// Function to generate the PDF report
async function generatePDF(candidateId, questions, userAnswers, feedback) {
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
        console.log('Candidate not found');
        return;
    }

    // Generate random percentages and scores
    const courseCompletionPercentage = generateRandomPercentage();
    const projectScore = generateProjectEvaluationScore();
   // const mcqResult = evaluateTest(questions, userAnswers);
   // const mcqScore = mcqResult.correctAnswers;
  //  const recommendations = generateAIRecommendations(mcqScore);

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    // Add candidate information to the PDF
    page.drawText(`Candidate Information:`, { x: 50, y: 750 });
    page.drawText(`Degree: ${candidate.degree}`, { x: 50, y: 730 });
    page.drawText(`Specialization: ${candidate.specification}`, { x: 50, y: 710 });
    page.drawText(`Certifications: ${candidate.certifications}`, { x: 50, y: 690 });
    page.drawText(`Internship Completed: ${candidate.internshipCompleted}`, { x: 50, y: 670 });

    // Add performance data to the PDF
    page.drawText(`Self-reported Course Completion: ${courseCompletionPercentage}%`, { x: 50, y: 650 });
  //  page.drawText(`MCQ Score: ${mcqScore}`, { x: 50, y: 630 });
    page.drawText(`Project Evaluation Score: ${projectScore}`, { x: 50, y: 610 });
  //  page.drawText(`AI Recommendations: ${recommendations}`, { x: 50, y: 590 });

    // Add feedback to the PDF
    page.drawText(`Feedback: ${feedback}`, { x: 50, y: 570 });

    // Save the PDF to a file
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('Candidate_Report.pdf', pdfBytes);
    console.log('PDF Generated');
}

// Example usage
(async function() {
    const questions = [
        { question: "What is Java?", correctAnswer: "A programming language" },
        { question: "What is polymorphism?", correctAnswer: "OOP concept" },
    ];
    
    const userAnswers = ["A programming language", "Incorrect answer"];
    
    // Assuming feedback is stored in the database, replace with actual feedback retrieval logic
    const feedback = "Great course, but more examples are needed for clarity.";

    // Call the generatePDF function for a candidate with ID and passing the test data
    await generatePDF('6708ff636862b9f9182e4fad', questions, userAnswers, feedback);
})();
