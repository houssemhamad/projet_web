// Quiz questions and answers
const questions = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "Paris",
        b: "London",
        c: "Rome"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: {
        a: "Earth",
        b: "Jupiter",
        c: "Saturn"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the smallest country in the world?",
      answers: {
        a: "Vatican City",
        b: "Monaco",
        c: "Nauru"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the most spoken language in the world?",
      answers: {
        a: "English",
        b: "Mandarin",
        c: "Spanish"
      },
      correctAnswer: "b"
    },
    {
      question: "Which animal is known as the 'king of the jungle'?",
      answers: {
        a: "Lion",
        b: "Gorilla",
        c: "Tiger"
      },
      correctAnswer: "a"
    }
  ];
  
  // Keep track of the score
  let score = 0;
  
  // Loop through questions
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    console.log(question.question);
  
    // Loop through answers
    for (const key in question.answers) {
      console.log(`${key}: ${question.answers[key]}`);
    }
  
    // Get user's answer
    const userAnswer = prompt("Enter the letter of the correct answer:");
  
    // Check if answer is correct
    if (userAnswer === question.correctAnswer) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Incorrect!");
    }
  }
  
  console.log(`Your final score is ${score} out of ${questions.length}.`);
  