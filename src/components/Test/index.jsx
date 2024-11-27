import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Data from '../../Data/data.json';
import { Button } from '@mui/material'; // MUI Button komponenti
import ReplayIcon from '@mui/icons-material/Replay'; // Qayta ishlash uchun ikonka
import './index.css'

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (answer) => {
    if (answer === Data[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setSelectedAnswer(answer);
    setTimeout(() => {
      setSelectedAnswer(null);
      if (nextQuestion < Data.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };


  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };


  return (
    <div className="quiz-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Test ishlash
      </motion.h1>
      {showScore ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="score-section"
        >
          You scored {score} out of {Data.length}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="button-container"
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<ReplayIcon />} // Replay Icon qo'shilgan
              onClick={handleRestart}
              sx={{
                mt: 3, // Margin top - bo'sh joy yuqoridan
                backgroundColor: '#1976d2', // Tugma rangi
                '&:hover': { backgroundColor: '#1565c0' }, // Hover effekti
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px',
              }}
            >
              Qayta ishlash
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="question-section"
        >
          <motion.div
            key={currentQuestion}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="question-text">
              {Data[currentQuestion].question}
            </div>
            <div className="answer-section">
              {Data[currentQuestion].options.map((option) => (
                <motion.button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={selectedAnswer === option ? 'selected' : ''}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Test;
