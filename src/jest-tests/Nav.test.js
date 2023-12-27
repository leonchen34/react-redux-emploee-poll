import {render, screen} from '@testing-library/react';
import Nav from '../components/Nav';
import {BrowserRouter} from 'react-router-dom';

test('check all links', () => {
    let testUser = {id:"sarahedo"};
    render(<Nav user={testUser}/>, {wrapper: BrowserRouter});
   
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/logout/)).toBeInTheDocument();
    expect(screen.getByText(/New/)).toBeInTheDocument();
    expect(screen.getByText(/Leaderboard/)).toBeInTheDocument();
})
