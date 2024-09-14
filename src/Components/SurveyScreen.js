import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
     { id: 1, text: 'How satisfied are you with our products?', type: 'rating', options: [1,2,3,4,5] },
     { id: 2, text: 'How fair are the prices compared to similar retailers?', type: 'rating', options: [1,2,3,4,5] },
     { id: 3, text: 'How satisfied are you with the value for money of your purchase?', type: 'rating', options: [1,2,3,4,5] },
     { id: 4, text: 'On a scale of 1-10, how would you recommend us to your friends and family?', type: 'rating', options: Array.from({ length: 10 },(_,i) => i + 1) },
     { id: 5, text: 'What could we do to improve our service?', type: 'text'}
]

function SurveyScreen() {
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    const [answers,setAnswers] = useState({});
    const navigate = useNavigate();

    const handleAnswerChange = (e) => {
        setAnswers({
            ...answers,
            [questions[currentQuestionIndex].id]: e.target.value
        });
    };

const handleNext = () => {
    if(currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else{
        navigate('/thank-you');
    }
};

const handlePrev = () => {
    if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex -1);
    }
};

const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="survey-container">
      <h1 className="survey-title">Customer Survey</h1>
      <div className="question-container">
        <div className="question-number">
          Question {currentQuestionIndex + 1} / {questions.length}
        </div>
        <p>{currentQuestion.text}</p>
        {currentQuestion.type === 'rating' ? (
          <div className="options-container">
            {currentQuestion.options.map(option => (
              <label key={option} className="radio-label">
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option}
                  checked={answers[currentQuestion.id] === option.toString()}
                  onChange={handleAnswerChange}
                  className="radio-input"
                />
                {option}
              </label>
            ))}
          </div>
        ) : (
          <textarea
            value={answers[currentQuestion.id] || ''}
            onChange={handleAnswerChange}
            className="text-input"
          />
        )}
        <div className="button-container">
          <button
            className="prev-button"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          >
            Prev
          </button>
          <button
            className="next-button"
            onClick={handleNext}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SurveyScreen;
