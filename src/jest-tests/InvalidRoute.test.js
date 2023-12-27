import { render } from '@testing-library/react';
import InvalidRoute from '../components/InvalidRoute';

describe("InvalidRoute", () => {
    it('match snapshot',() => {
        let component = render(<InvalidRoute />);
        expect(component).toMatchSnapshot();
    })    
})