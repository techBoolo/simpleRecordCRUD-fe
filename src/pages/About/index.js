import { technologies } from '../../data/technologies.js'

import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

const About = (props) => {

  return (
    <>
      <Typography variant='h5' sx={{ textDecoration: 'underline', mb: 2 }}>Technologies used :</Typography>      
      <Box>
        <Typography variant='h6'>Backend</Typography>
        <List>
          { technologies.backend.map(element => (
              <ListItem key={element.name}>
                  <ListItemText primary={element.name} secondary={<Link href={element.web} target='new' >{element.web}</Link> } />
              </ListItem>
            ))
          }
        </List>
      </Box>
      <Box>
        <Typography variant='h6'>Frontend</Typography>
        <List>
          { technologies.frontend.map(element => (
              <ListItem key={element.name}>
                <ListItemText primary={element.name} secondary={<Link href={element.web} target='new' >{element.web}</Link> } />
              </ListItem>
            ))
          }
        </List>
      </Box>
      <Box>
        <Typography variant='h6'>Hosting</Typography>
        <List>
          { technologies.hosting.map(element => (
              <ListItem key={element.name}>
                <ListItemText primary={element.name} secondary={ <Link href={element.web} target='new' >{element.web}</Link> } />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </>
  );
};

export default About
