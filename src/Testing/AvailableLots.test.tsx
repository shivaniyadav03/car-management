import {cleanup, findByTestId, fireEvent, render} from '@testing-library/react';
import AvailableLots from '../Pages/availableLots';
import {createStore} from 'redux';
import reducer from '../reducer/reducer';
import {Provider} from 'react-redux';

beforeEach(()=>{
    document.body.innerHTML="";
});
afterEach(()=>{
    cleanup();
});
const mockedData=jest.fn();
jest.mock('react-router-dom',()=>{
    const updateData=jest.requireActual('react-router-dom');
    return{
    __esModule:true,
    ...updateData,
    useLocation:()=>mockedData,
    useNavigate:()=>mockedData
    };
});
describe('To create Snapshot Of Available Component',()=>{
    test('',()=>{
        const store=createStore(reducer);
        render(
            <Provider store={store}>
                <AvailableLots/>
            </Provider>
        );
        expect(screen).toMatchSnapshot();
    });
});