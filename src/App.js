import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getRecords } from './redux/reducers/recordSlice.js'
import Router from './router.js'

import Navbar from './components/Navbar/'

import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getRecords())
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Router />
      </Container>
    </>
  );
}

export default App;
