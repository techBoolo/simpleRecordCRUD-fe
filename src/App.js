import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getRecords } from './redux/reducers/recordSlice.js'

import NewRecord from './components/NewRecord/'
import RecordList from './components/RecordList/'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const App = () => {
  const [ newRecord, setNewRecord ] = useState(false)
  const dispatch = useDispatch()

  const handleNewRecord = () => {
    setNewRecord(true)
  }

  useEffect(() => {
    dispatch(getRecords())
  }, [dispatch])
  return (
    <>
      <CssBaseline />
      <Box sx={{ m: 2}}>
        <Box sx={{ my: 2}}>
          <Button variant='contained' onClick={handleNewRecord}>Add New</Button>
        </Box>
        { newRecord && <NewRecord  setNewRecord={setNewRecord} /> }
        <RecordList />
      </Box>
    </>
  );
}

export default App;
