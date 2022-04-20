import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveRecord } from '../../redux/reducers/recordSlice.js'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

const NewRecord = ({ setNewRecord }) => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ age, setAge ] = useState('')
  const [ gender, setGender ] = useState('')
  
  const dispatch = useDispatch()

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const record = { name, email, age, gender }
    dispatch(saveRecord(record))
    setNewRecord(false)
  }

  const handleCancel = (ev) => {
    setNewRecord(false)
  }

  return (
    <Stack 
      spacing={2} 
      component='form' 
      onSubmit={handleSubmit} 
      sx={{width: 1, maxWidth: 360, p: 2, border: '1px solid #ccc', mb: 2}}
    >
      <Typography variant='h6'> Add new record</Typography>
      <Stack spacing={2} sx={{ border: '1px solid #ccc', p: 2}}>
        <TextField
          label='Full Name'
          size='small'
          autoFocus
          autoComplete='off'
          required
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          fullWidth
        />
        <TextField
          type='email'
          label='Email'
          size='small'
          autoComplete='off'
          required
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          fullWidth
        />
        <TextField
          type='number'
          label='Age'
          size='small'
          autoComplete='off'
          required
          value={age}
          onChange={(ev) => setAge(ev.target.value)}
          fullWidth
        />

        <FormControl required fullWidth size='small'>
          <InputLabel id='gender'>Gender</InputLabel>
          <Select 
            labelId='gender'
            label='Gender'
            size='small'
            value={gender}
            onChange={(ev) => setGender(ev.target.value)}
          >
            <MenuItem value='m'>male</MenuItem>
            <MenuItem value='f'>female</MenuItem>
          </Select>
        </FormControl>

      </Stack>
      <Box>
        <Button variant='contained' type='submit' sx={{ mr: 2}}>Add</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Box>
    </Stack>
  );
};

export default NewRecord
