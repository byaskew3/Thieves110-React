import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const theme = createTheme();

export default function SearchChampion() {

  const [champion, setChampion] = useState('')
  const [championData, setChampionData] = useState({})

  const getChampionData = async (name) => {

    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion/${name}.json`)
    const data = await response.json()
    console.log(data)

    const championImage = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${name}.png`)
    console.log(championImage)

    setChampionData({
      name: data.data[name].name,
      title: data.data[name].title,
      lore: data.data[name].lore,
      difficulty: data.data[name].info.difficulty,
      image: championImage.url
    })
  }
  
  useEffect(() => {
    const addToFirebase = async () => {
      try {
        const docRef = await addDoc(collection(db, "champions"), {
          name: championData.name,
          title: championData.title,
          lore: championData.lore,
          difficulty: championData.difficulty,
          image: championData.image
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    addToFirebase()
  }, [championData])

  const handleSubmit = (event) => {
    event.preventDefault();
    const titleChampion = champion[0].toUpperCase() + champion.slice(1,).toLowerCase()
    getChampionData(titleChampion)
    console.log(championData)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            LoL Champion Builder
          </Typography>
          <img src='https://images6.alphacoders.com/651/651136.jpg'/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="champion"
              label="Search Champion"
              name="champion"
              autoFocus
              onChange={(event) => {setChampion(event.target.value)}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}