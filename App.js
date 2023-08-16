import react , { useState } from 'react';
import './App.css';

function App() {
  const question = [
    {questionText: "What is the capital of France",
    ansswerOption: [
      {answerText:"New York",isCorrect: false},
      {answerText:"London",isCorrect: false},
      {answerText:"Paris",isCorrect: true},
      {answerText:"Dublin",isCorrect: false},
  ],
  },
  {questionText: "Who is the CEO of Apple",
    ansswerOption: [
      {answerText:"Jeff Bezoz",isCorrect: false},
      {answerText:"Eloz Mask",isCorrect: false},
      {answerText:"Tim cook",isCorrect: true},
      {answerText:"Mark Zakurburg",isCorrect: false},
  ],
  },
  {questionText: "Who is the CEO of Facebook",
    ansswerOption: [
      {answerText:"Henry Calvil",isCorrect: false},
      {answerText:"Mark Zakurburg",isCorrect: true},
      {answerText:"Bradpit",isCorrect: false},
      {answerText:"Downey jr",isCorrect: false},
  ],
  },
  {questionText: "Who is the CEO of Google",
    ansswerOption: [
      {answerText:"Sundar",isCorrect: true},
      {answerText:"Carry",isCorrect: false},
      {answerText:"Chris",isCorrect: false},
      {answerText:"Agentroman",isCorrect: false},
  ],
  },
  ]
  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score , setScore] = useState(0);

  const handleAnswerButton = (isCorrect) => {
    if(isCorrect === true){
      // alert("Your Answer is correct");
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    }else {
      setShowScore(true);
    }
  }

  return (
    <div className="App">
      {showScore ? (<div className="score-section">You scored {score} out of {question.length}</div>) : (
        <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion}</span>/{question.length}
          </div>
          <div className="question-text">{question[currentQuestion].questionText}</div>
        </div>
        <div className="answer-section">
          {question[currentQuestion].ansswerOption.map((ansswerOption) => (
            <button onClick={() => handleAnswerButton(ansswerOption.isCorrect)}>{ansswerOption.answerText}</button>
          ))}
        </div>
        </>
      ) 
      }
    </div>
  );
}

export default App;
