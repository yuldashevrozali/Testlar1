import React, { useState } from 'react';
import { Button, Box, Typography, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Asosiy() {
  const [darkMode, setDarkMode] = useState(false);

  // Create themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: '#f5f5f5',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#bb86fc',
      },
      background: {
        default: '#121212',
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          backgroundColor: 'background.default',
          padding: '20px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Asosiy sahifa
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Bu sahifa asosiy ma'lumotlarni o'z ichiga oladi.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/Test"
          sx={{
            backgroundColor: 'primary.main',
            '&:hover': { backgroundColor: '#1565c0' },
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '8px',
          }}
        >
          Test sahifasiga o'tish
        </Button>
       
      </Box>
    </ThemeProvider>
  );
}

export default Asosiy;
