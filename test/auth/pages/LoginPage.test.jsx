import { render, screen, fireEvent } from "@testing-library/react";
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import { authSlice} from "../../../src/store/auth";
import { startGoogleSignIn } from "../../../src/store/auth/thunks";
import {MemoryRouter} from 'react-router-dom';
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn()

jest.mock('../../../src/store/auth/thunks',()=>({
  startGoogleSignIn: () => mockStartGoogleSignIn
}))


const store = configureStore({
  reducer: {
   auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
})

describe('Pruebas en el <LoginPage/>', () => { 

    test('debe mostrar el componente correctamente', () => { 
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/> 
                </MemoryRouter>                
            </Provider>
           
        );
        //screen.debug()
        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
    });

    test('boton de Google debe llamar el startingGoogleSignIn', () => { 

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/> 
                </MemoryRouter>
                
            </Provider>
           
        );
        

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);
        expect(mockStartGoogleSignIn).toHaveBeenCalled();
        
    
        
    })
})