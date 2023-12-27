import {render, screen} from '@testing-library/react';
import { configureStore } from "@reduxjs/toolkit";
import {MemoryRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import reducer from '../reducers';
import logger from "../middleware/logger";
import App from '../components/App';

const store = configureStore({reducer:reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)});

test('invalid route', async () => {
    const route="/invalid-route";

    render(
        <MemoryRouter initialEntries={[route]}>
            <Provider store={store} >
                <App />
            </Provider>
        </MemoryRouter>
    )
    
    expect(screen.getByText(/404 Page Not Found/)).toBeInTheDocument();
    
})

test('route to login page', async () => {
    const route="/";

    render(
        <MemoryRouter initialEntries={[route]}>
            <Provider store={store} >
                <App />
            </Provider>
        </MemoryRouter>
    )
    
    expect(screen.getByText(/Log In/)).toBeInTheDocument();
    
})
