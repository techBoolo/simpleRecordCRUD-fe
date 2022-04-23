import { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecord } from '../../redux/reducers/recordSlice.js'
import RecordListHeader from './RecordListHeader.js'
import RecordListActions from './RecordListActions.js'
import EditDialog from '../EditRecord/EditDialog/'
import DeleteDialog from '../DeleteRecord/DeleteDialog/'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const RecordList = (props) => {
  const [ openEdit, setOpenEdit ] = useState(false)
  const [ openDelete, setOpenDelete ] = useState(false)
  const [ currentRecordId, setCurrentRecordId ] = useState(null)
  const { records } = useSelector(state => state.record)
  const dispatch = useDispatch()


  const showEditDialog = (id) => {
    dispatch(getRecord(id)) 
    setOpenEdit(true)
  }
  const showDeleteDialog = (id) => {
    setCurrentRecordId(id)
    setOpenDelete(true)
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <RecordListHeader />
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
          <RecordListActions 
            showEditDialog={() => showEditDialog(record._id)} 
            showDeleteDialog={() => showDeleteDialog(record._id)} 
          />
        </Fragment>
      ))}

      <EditDialog openEdit={openEdit} setOpenEdit={setOpenEdit} />
      <DeleteDialog openDelete={openDelete} setOpenDelete={setOpenDelete} id={currentRecordId} />
    </Box>
  );
};

export default RecordList
