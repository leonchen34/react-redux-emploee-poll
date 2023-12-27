import {render, fireEvent} from '@testing-library/react';
import { configureStore } from "@reduxjs/toolkit";
import {MemoryRouter,Routes,Route} from 'react-router-dom';
import { Provider } from "react-redux";
import LogIn from '../components/LogIn';
import reducer from '../reducers';
import logger from "../middleware/logger";

const store = configureStore({reducer:reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)});

function render_comp() {
    return render(
        <Provider store={store} >
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );
}

test('check presence of input fields', () => {
    const component = render_comp();
    expect(component.getByTestId("user")).toBeInTheDocument();
    expect(component.getByTestId("password")).toBeInTheDocument();
    expect(component.getByText('Submit')).toBeInTheDocument();
})

test('error with empty submit', () => {
    const component = render_comp();
    let userInput = component.getByTestId("user");
    let submitButton = component.getByText('Submit');
    
    fireEvent.click(submitButton);
    expect(component.getByTestId("error-header")).toBeInTheDocument();
})

test('error with invalid user', () => {
    const component = render_comp();
    let userInput = component.getByTestId("user");
    let passwordInput = component.getByTestId("password");
    let submitButton = component.getByText('Submit');

    fireEvent.change(userInput,{target:{value: ''}});
    fireEvent.change(passwordInput,{target:{value:"test"}});
    fireEvent.click(submitButton);
    expect(component.getByTestId("error-user-header")).toBeInTheDocument();
})
