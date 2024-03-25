import React, { useState, useEffect } from 'react';
import './QuizWindow.css';
import { useLocation } from 'react-router-dom'; 

function QuizWindow() {
  const location = useLocation();
  const questions = location.state.questions;

  const [currInd, setCurrInd] = useState(0);
  const [isquizFinished, setIsQuizFinished] = useState(false);
  const [resultCounter , setResultCounter] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1); 

  const handleOnchange = (e) => {
    setSelectedOptionIndex(parseInt(e.target.value, 10));
  }

  const handleLiClick = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
  }

  const handleSubmit = () => {
    const correctInd = questions[currInd].correctAnswerIndex;
    if (correctInd === selectedOptionIndex+1) {
      setResultCounter(resultCounter + 1);
    }
    if (currInd + 1 === questions.length) {
      setIsQuizFinished(true); 
    } else {
      setCurrInd(currInd + 1); 
      setSelectedOptionIndex(-1);
    }
  }

  return (
    <div className="quiz-section">
      {isquizFinished ? ( 
        <div className="quiz">
          <h2>Result: {resultCounter}/{questions.length}</h2>
        </div> 
      ):(
        <div className="quiz">
          <h2 className="question">{questions[currInd].text}</h2>
          <div className='line'></div>
          <ul>
            {questions[currInd].options && questions[currInd].options.map((option, optionIndex) => (
              <li key={optionIndex} onClick={() => handleLiClick(optionIndex)}>
                <input type="radio" name={`question-${currInd}`} id={`option-${optionIndex}`} value={optionIndex} onChange={handleOnchange} checked={optionIndex === selectedOptionIndex}/>
                <label htmlFor={`option-${optionIndex}`}>{option}</label>
              </li>            
            ))}
          </ul>
          <div className="quiz-button">
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizWindow;
