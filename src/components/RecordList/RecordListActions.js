import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
const RecordListActions = ({ showEditDialog, showDeleteDialog}) => {

  return (
    <Box sx={{p: 1, display: 'flex' }}>
      <Tooltip title='edit' placement='left' arrow>
        <IconButton onClick={showEditDialog} size='small' sx={{ px: 2}}>
          <EditIcon fontSize='small' />
        </IconButton>
      </Tooltip>
      <Tooltip title='delete' placement='right' arrow>
        <IconButton onClick={showDeleteDialog} size='small' sx={{ px: 2}}>
          <DeleteIcon fontSize='small' />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default RecordListActions
