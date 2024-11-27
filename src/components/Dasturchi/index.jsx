import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles'; // Tema o'zgarishini olish

function Dasturchi() {
  const theme = useTheme(); // Tema o'zgarishini olish
  const isDarkMode = theme.palette.mode === 'dark'; // Tema qora bo'lsa

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: isDarkMode ? '#121212' : '#f5f5f5', // Tema asosida fon rangini belgilash
        color: isDarkMode ? 'white' : 'black', // Matn rangini tema asosida o'zgartirish
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dasturchi
      </Typography>
      <Typography variant="h6" gutterBottom>
        Ism Familiyasi: Ro'zali Yuldashev
      </Typography>

      {/* Telegram link */}
      <Button
        variant="contained"
        startIcon={<TelegramIcon />}
        href="https://t.me/yu1dashev_blog" // Telegram guruhining URL manzilini kiriting
        target="_blank"
        sx={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#6200ea', // Button fon rangi
          color: 'white', // Button matni oq rangda
          '&:hover': {
            backgroundColor: '#3700b3', // Hover holatidagi fon rangi
          },
          marginBottom: '15px',
        }}
      >
        Telegram Kanalga Qo'shilish
      </Button>
      <Button
        variant="contained"
        startIcon={<GitHubIcon />}
        href="http://yuldashev-portfolio.vercel.app" // Portfolio manzilingizni kiriting
        target="_blank"
        sx={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#6200ea',
          color: 'white',
          '&:hover': {
            backgroundColor: '#3700b3',
          },
          marginBottom: '15px',
        }}
      >
        Portfolio Saytiga O'tish
      </Button>

      {/* GitHub link */}
      <IconButton
        href="https://github.com/yuldashevrozali" // GitHub manzilingizni kiriting
        target="_blank"
        sx={{
          margin: '10px',
          backgroundColor: '#333',
          color: 'white',
          '&:hover': {
            backgroundColor: '#555',
          },
        }}
      >
        <GitHubIcon fontSize="large" />
      </IconButton>

      {/* Instagram link */}
      <IconButton
        href="https://instagram.com/rozalibekyuldashev" // Instagram manzilingizni kiriting
        target="_blank"
        sx={{
          margin: '10px',
          backgroundColor: '#E1306C',
          color: 'white',
          '&:hover': {
            backgroundColor: '#b72451',
          },
        }}
      >
        <InstagramIcon fontSize="large" />
      </IconButton>

      {/* Portfolio link */}
     
    </Box>
  );
}

export default Dasturchi;
