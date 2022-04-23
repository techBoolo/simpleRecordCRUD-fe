import { useDispatch } from 'react-redux'
import { deleteRecord } from '../../../redux/reducers/recordSlice.js'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const DeleteDialog = ({ openDelete, setOpenDelete, id}) => {
  const dispatch = useDispatch()

  const handleDialogClose = () => {
    setOpenDelete(false)
  }
  const handleDeleteRecord = () => {
    dispatch(deleteRecord(id))
    setOpenDelete(false)
  }
  return (
    <Dialog open={openDelete} onClose={handleDialogClose}>
      <DialogTitle>Delete a record</DialogTitle>
      <DialogContent>
        <DialogContentText>confirm deleting the record</DialogContentText>
      </DialogContent> 
      <DialogActions> 
        <Button onClick={handleDeleteRecord}>Delete</Button>
        <Button onClick={handleDialogClose}>Cancel</Button>
      </DialogActions> 
    </Dialog>
  );
};

export default DeleteDialog
