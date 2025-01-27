import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Data from '../../Data/data.json';
import { Button, TextField, useTheme } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [userName, setUserName] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('Users')) || [];
    if (users.length > 0) {
      setIsUserRegistered(true);
    }
  }, []);

  const handleAnswerOptionClick = (answer) => {
    const isCorrect = answer === Data[currentQuestion].correct;
    setSelectedAnswer(answer);
    setCorrectAnswer(Data[currentQuestion].correct);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    setTimeout(() => {
      setSelectedAnswer(null);
      setCorrectAnswer(null);
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
    setCorrectAnswer(null);
  };

  const handleGoToEslatma = () => {
    navigate('/qoshimcha/Eslatma');
  };

  const handleStartTest = () => {
    const users = JSON.parse(localStorage.getItem('Users')) || [];
    const newUser = {
      id: users.length + 1,
      name: userName,
    };
    users.push(newUser);
    localStorage.setItem('Users', JSON.stringify(users));
    setIsUserRegistered(true);
  };

  return (
    <div
      className="quiz-container"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {!isUserRegistered ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="registration-section"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ismingiz va familyangizni kiriting
          </motion.h1>
          <TextField
            label="Ism va Familya"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartTest}
            disabled={!userName.trim()}
            sx={{
              backgroundColor: theme.palette.primary.main,
              '&:hover': { backgroundColor: theme.palette.primary.dark },
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '8px',
            }}
          >
            Testni boshlash
          </Button>
        </motion.div>
      ) : showScore ? (
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
                backgroundColor: theme.palette.primary.main,
                '&:hover': { backgroundColor: theme.palette.primary.dark },
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px',
              }}
            >
              Qayta ishlash
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                mt: 3,
                ml: 2,
                backgroundColor: theme.palette.secondary.main,
                '&:hover': { backgroundColor: theme.palette.secondary.dark },
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px',
              }}
              onClick={handleGoToEslatma}
            >
              Eslatma
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
                  whileHover={{ scale: 1.05, backgroundColor: theme.palette.action.hover }}
                  whileTap={{ scale: 0.95 }}
                  className={`option-button ${
                    selectedAnswer
                      ? option === correctAnswer
                        ? 'correct' // Asl to'g'ri javob ko'k rangda
                        : option === selectedAnswer
                        ? 'incorrect' // Tanlangan noto'g'ri javob qizil rangda
                        : ''
                      : ''
                  }`}
                  disabled={!!selectedAnswer} // Javob tanlangandan keyin disable qilish
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
