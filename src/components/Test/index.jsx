import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Data from '../../Data/data.json';
import { Button, useTheme } from '@mui/material'; // useTheme qo'shildi
import ReplayIcon from '@mui/icons-material/Replay';
import './index.css'; // Style ni alohida faylga chiqaramiz

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // useTheme() bilan mavzuni olamiz
  const theme = useTheme();

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
    <div
      className="quiz-container"
      style={{
        backgroundColor: theme.palette.background.default, // Dark/Light mode background
        color: theme.palette.text.primary, // Dark/Light mode text color
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Test ishlash
      </motion.h1>
      {showScore ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="score-section"
        >
          You scored {score} out of {Data.length}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="button-container"
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<ReplayIcon />}
              onClick={handleRestart}
              sx={{
                mt: 3,
                backgroundColor: theme.palette.primary.main, // Theme'ga mos rang
                '&:hover': { backgroundColor: theme.palette.primary.dark },
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
          transition={{ duration: 0.8 }}
          className="question-section"
        >
          <motion.div
            key={currentQuestion}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="question-container"
          >
            <div className="question-text">
              {Data[currentQuestion].question}
            </div>
            <div className="answer-section">
              {Data[currentQuestion].options.map((option) => (
                <motion.button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  whileHover={{ scale: 1.05, backgroundColor: theme.palette.action.hover }} // Hover rangini theme'dan olish
                  whileTap={{ scale: 0.95 }}
                  className={`option-button ${
                    selectedAnswer === option ? 'selected' : ''
                  }`}
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
