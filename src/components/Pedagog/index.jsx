import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram'; // Telegram ikonkasi
import { useTheme } from '@mui/material/styles'; // Theme ishlatish uchun

function Pedagog() {
  const theme = useTheme(); // Tema o'zgarishini olish

  // Tema ranglarini tanlash
  const isDarkMode = theme.palette.mode === 'dark';

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
        Pedagog
      </Typography>
      <Typography variant="h6" gutterBottom>
        Ism Familiyasi: Husniddin Yuldashaliyev
      </Typography>

      {/* Telegram link */}
      <Button
        variant="contained"
        startIcon={<TelegramIcon />}
        href="https://t.me/Attestatsiya_Ped_Mahorat" // Telegram guruhining URL manzilini kiriting
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
        Telegram Guruhiga Qo'shilish
      </Button>

      <Button
        variant="contained"
        startIcon={<TelegramIcon />}
        href="https://t.me/Pedagogikadan_quiz_testlar" // Telegram guruhining URL manzilini kiriting
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
        Telegram kanalga Qo'shilish
      </Button>

      <Button
        variant="contained"
        startIcon={<TelegramIcon />}
        href="https://t.me/Husniddin_Yuldashaliyev" // Telegram guruhining URL manzilini kiriting
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
        }}
      >
        Pullik kursga qo'shilish
      </Button>
    </Box>
  );
}

export default Pedagog;
