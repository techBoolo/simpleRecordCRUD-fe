import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const RecordListHeader = (props) => {
  return (
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
  )
}

export default RecordListHeader
