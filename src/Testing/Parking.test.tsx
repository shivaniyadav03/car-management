import {render,cleanup} from '@testing-library/react';
import ParkingArea from '../Pages/parkingArea';
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
    useNavigate:()=>mockedData,
    useDispatch:()=>mockedData
    };
});
describe('To create Snapshots',()=>{
test('',()=>{
    const store=createStore(reducer);
    render(
        <Provider store={store}>
            <ParkingArea/>
        </Provider>
    );
expect(screen).toMatchSnapshot();
});
});