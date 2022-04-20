import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const RecordList = (props) => {

  const { records } = useSelector(state => state.record)

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <>
        <Box sx={{p: 1,  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', bgcolor: '#f4f4f4' }}>
          <Typography>Name</Typography>
          <Typography>Email</Typography>
        </Box>
        <Box sx={{p: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' , bgcolor: '#f4f4f4'}}>
          <Typography>Age</Typography>
          <Typography>Gender</Typography>
        </Box>
        <Box sx={{ bgcolor: '#f4f4f4', p: 1}}><Typography>Actions</Typography></Box>
      </>
      { records.map(record => ( 
        <Fragment key={record._id}>
          <Box  sx={{ p: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Typography>{record.name}</Typography>
            <Typography>{record.email}</Typography>
          </Box>
          <Box  sx={{p: 1,  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Typography>{record.age}</Typography>
            <Typography>{record.gender}</Typography>
          </Box>
          <Box  sx={{p: 1, display: 'flex' }}>
            <Button size='small'>edit</Button>
            <Button size='small'>delete</Button>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};

export default RecordList
