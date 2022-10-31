import {Typography} from '@mui/material';
import {JournalLayout} from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    
    <JournalLayout>
    {/*<Typography >.Sint deserunt fugiat ullamco culpa nulla velit reprehenderit adipisicing anim proident.</Typography>*/}
    
    {/*<NothingSelectedView/>*/}

    <NoteView/>
    
    </JournalLayout>
    
  )
}
