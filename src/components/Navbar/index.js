import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Navbar = (props) => {

  return (
    <AppBar position='static' sx={{ mb: 2}}>
      <Toolbar>
        <Link component={RouterLink} to='/' color='inherit' sx={{ textDecoration: 'none'}}>
          <Typography sx={{mr: 2}}>CRUD</Typography>
        </Link>
        <Link component={RouterLink} to='/about' color='inherit' sx={{ textDecoration: 'none'}}>
          <Typography sxs={{ mr: 2}}>About</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar
