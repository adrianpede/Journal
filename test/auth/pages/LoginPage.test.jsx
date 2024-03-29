import { render, screen, fireEvent } from "@testing-library/react";
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import { authSlice} from "../../../src/store/auth";
import { startGoogleSignIn } from "../../../src/store/auth/thunks";
import {MemoryRouter} from 'react-router-dom';
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks',()=>({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword:({email,password}) => {
    return () => mockStartLoginWithEmailPassword({email, password})},
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
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
    beforeEach( () => jest.clearAllMocks());

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
        
    
        
    });

    test('submit debe llamar startLoginWithEmailPassword', () => { 
        
        const email = 'adrianpede@gmail.com';
        const password = '123456';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/> 
                </MemoryRouter>                
            </Provider>           
        );
        const emailField = screen.getByRole('textbox',{name:'Correo'});
        fireEvent.change(emailField, {taget:{name:'email', value:email}});

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, {taget:{name:'password', value:password}});

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm);

        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
            email: email,
            password: password
        })
       
     });
 });