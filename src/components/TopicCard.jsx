import React from 'react'
import './TopicCard.css'
import { useNavigate } from "react-router-dom";


function TopicCard({topicData}){
   const navigate = useNavigate();

   const startQuiz = () => {
      navigate('/quiz', {
        state: { questions: topicData.questions }
      });
    };
  
  return (
     <div className="cards">
         <h2>{topicData.title}</h2>
         <p>{topicData.description}</p>
        <button onClick={startQuiz}>START QUIZ</button>
     </div>
  )
}

export default TopicCard;