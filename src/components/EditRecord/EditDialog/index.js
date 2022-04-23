import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateRecord } from '../../../redux/reducers/recordSlice.js'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const EditDialog = (props) => {
  const { openEdit, setOpenEdit } = props
  const { currentRecord } = useSelector(state => state.record)
  const [ record, setRecord ] = useState(currentRecord ? currentRecord : { name: '', email: '', age: '', gender: ''})

  const dispatch = useDispatch()

  const handleDialogClose = () => {
    setOpenEdit(false)
  }

  const handleRecordSave = (ev) => {
    ev.preventDefault()
    dispatch(updateRecord(record))
    setOpenEdit(false)
  }

  useEffect(() => {
    setRecord(currentRecord ? currentRecord : { name: '', email: '', age: '', gender: ''})
  }, [currentRecord])

  return (
    <Dialog component='form' onSubmit={handleRecordSave} open={openEdit} onClose={handleDialogClose}>
      <DialogTitle>Edit record</DialogTitle>
      <DialogContent>
        <Box sx={{ my: 1, width: 1, maxWidth: 360}}>
          <TextField
            required
            label='Name'
            size='small'
            margin='normal'
            fullWidth
            value={record.name}
            onChange={(ev)  => setRecord({...record, name: ev.target.value})}
          />
          <TextField
            required
            label='Email'
            type='email'
            size='small'
            margin='normal'
            fullWidth
            value={record.email}
            onChange={(ev)  => setRecord({...record, email: ev.target.value})}
          />
          <TextField
            required
            label='Age'
            type='number'
            size='small'
            margin='normal'
            fullWidth
            value={record.age}
            onChange={(ev)  => setRecord({...record, age: ev.target.value})}
          />
          <FormControl fullWidth size='small' margin='normal'>
            <InputLabel id='gender'>Gender</InputLabel>
            <Select
              labelId='gender'
              label='Gender'
              value={record.gender}
              onChange={(ev) => setRecord({...record, gender: ev.target.value})}
            >
              <MenuItem value='m'>male</MenuItem>
              <MenuItem value='f'>female</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button type='submit'>Save</Button>
        <Button onClick={handleDialogClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog
