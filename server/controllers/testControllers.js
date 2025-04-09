const { Test, Submission } = require('../models');

const createTest = async (req, res) => {
  try {
    const { title, description, questions } = req.body;

    if (!title || !description || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const newTest = await Test.create({ title, description, questions });
    res.status(201).json({ message: 'Test created successfully', test: newTest });
  } catch (error) {
    console.error('Error creating test:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const submitTest = async (req, res) => {
    const { testId } = req.params;
    const { candidateName, candidateEmail, answers } = req.body;
  
    try {
      const test = await Test.findByPk(testId);
      if (!test) return res.status(404).json({ message: 'Test not found' });
  
      const correctAnswers = test.questions.map(q => q.correctIndex);
      let score = 0;
  
      answers.forEach((answer, i) => {
        if (answer === correctAnswers[i]) score++;
      });
  
      const submission = await Submission.create({
        candidateName,
        candidateEmail,
        testId,
        answers,
        score,
      });
  
      res.status(201).json({ message: 'Submission recorded', submission });
    } catch (err) {
      console.error('Submission error:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


module.exports = {
    createTest,
    submitTest
};



//example json body to test in POstman

/*

{
  "title": "Frontend Developer Test",
  "description": "60 questions | 60 mins | No negative marking.",
  "questions": [
    {
      "question": "What is React?",
      "options": ["Library", "Framework", "Language", "Database"],
      "correctIndex": 0
    },
    {
      "question": "What is JSX?",
      "options": ["Java Syntax", "JavaScript XML", "JQuery Syntax", "None"],
      "correctIndex": 1
    }
  ]
}

*/