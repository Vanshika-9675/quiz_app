import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import TopicCard from './TopicCard';
import './Topics.css'
import { IoIosAdd } from "react-icons/io";

function Topics() {

  const [quizData ,setQuizData] = useState([]);

    useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async ()=>{
    try {
      const response = await fetch('https://quizbackend-uzqt.onrender.com/api/v1/topic');
  
      if(!response.ok){
         throw new Error('Failed to fetch topics'); 
      }
      
      const data = await response.json();
      setQuizData(data.topics);

    } 
    catch (error){
        console.log('Failed to fetch topics:', error);
    }

  }

 const navigation = useNavigate();

  useEffect(()=>{
      if(!localStorage.getItem('token'))
      {
          navigation('/')
      }
      else{
          navigation('/topics')
      }
  },[])


  return (
    <div>
       <div className='nav'>Welcome to the Quiz App!!</div>
       <div className='cardContainer'>
       {
          quizData.map(data => (
            <TopicCard key={data._id} topicData={data} />
          ))
       }
       </div>
       <div className="footer">
           Made by @Vanshika
       </div>
    </div>
  )
}

export default Topics;