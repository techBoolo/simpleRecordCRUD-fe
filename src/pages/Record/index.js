import { useState } from 'react'
import NewRecord from '../../components/NewRecord/'
import RecordList from '../../components/RecordList/'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Record = (props) => {
  const [ newRecord, setNewRecord ] = useState(false)

  const handleNewRecord = () => {
    setNewRecord(true)
  }

  return (
    <>
      <Box sx={{ m: 2}}>
        <Box sx={{ my: 2}}>
          <Button variant='contained' onClick={handleNewRecord}>Add New</Button>
        </Box>
        { newRecord && <NewRecord  setNewRecord={setNewRecord} /> }
      </Box>
      <RecordList />
    </>
  );
};

export default Record
