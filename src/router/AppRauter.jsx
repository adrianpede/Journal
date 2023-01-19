import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import useCheckAuth from "../hooks/useCheckAuth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

import { CheckingAuth } from "../ui/components/CheckingAuth";


export const AppRauter = () => {
 const status = useCheckAuth();

if(status === 'checking'){
  return <CheckingAuth/>
}

  return (
    <Routes>
        {/*login y registro*/}
        {
          (status === 'authenticated')
          ? <Route path='/*' element={<JournalRoutes/>}/>
          : <Route path='/auth/*' element={<AuthRoutes/>}/>
        }
        <Route path="/*" element={<Navigate to='/auth/login'/>}/>

        {/*<Route path='/auth/*' element={<AuthRoutes/>}/>*/}

        {/*JournalApp*/}
        {/*<Route path='/*' element={<JournalRoutes/>}/>*/}
    </Routes>
  )
}
