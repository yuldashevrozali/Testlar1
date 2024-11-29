import React from 'react';
import { Box, Typography } from '@mui/material';
import NoteIcon from '@mui/icons-material/Note'; // Eslatma ikonkasi

function Eslatma() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        boxShadow: theme.palette.mode === 'dark' ? '0 4px 10px rgba(0, 0, 0, 0.3)' : '0 4px 10px rgba(200, 200, 200, 0.3)',
      })}
    >
      <NoteIcon sx={{ fontSize: 40, marginBottom: 2 }} />
      <Typography variant="h6" gutterBottom>
        Eslatma:
      </Typography>
      <Typography variant="body1" paragraph>
        Ushbu testlar mualliflik huquqi bilan himoyalangan. Ularni muallifning yozma roziligisiz ko‘paytirish, tarqatish yoki boshqa resurslarga joylashtirish qat’iyan taqiqlanadi. Mualliflik huquqining buzilishi O‘zbekiston Respublikasining qonunlariga muvofiq javobgarlikka olib keladi.
      </Typography>
      <Typography variant="body1">
        Asos:
        <br />
        O‘zbekiston Respublikasi Konstitutsiyasining 42-moddasiga ko‘ra, har kim intellektual mulk huquqiga ega. Shuningdek, "Mualliflik huquqi va turdosh huquqlar to‘g‘risida"gi qonunga binoan, mualliflik huquqi muhofaza qilinadi.
        <br />
        <br />
        Muallif: Xusniddin Yuldashaliyev
        <br />
        Aloqa uchun: <a href="https://t.me/Husniddin_Yuldashaliyev" target="_blank" rel="noopener noreferrer">https://t.me/Husniddin_Yuldashaliyev</a>
      </Typography>
    </Box>
  );
}

export default Eslatma;
