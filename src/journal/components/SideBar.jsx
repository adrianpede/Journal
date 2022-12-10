

import { Box,Divider,Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"


export const SideBar = ({drawerWidth }) => {
  return (
    <Box
    component='nav'
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    
    >
        <Drawer
        variant="permanent" // temporary 
        open
        sx={{ 
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Adrián Pedemonte
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo','Abril'].map(text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <TurnedInNot/>

                                <Grid container>
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'Esse incididunt enim et esse esse ea labore consectetur.'}/>                            
                                
                                 </Grid>
                            </ListItemButton>                            

                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
        


    </Box>
  )
}
