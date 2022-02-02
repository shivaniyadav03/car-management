import {cleanup, findByTestId, fireEvent, render} from '@testing-library/react';
import { Provider } from 'react-redux';
import AskNumberOfLots from '../Pages/askNumberOfLots';
import {createStore} from 'redux';
import reducer from '../reducer/reducer';
//import {useSelector} from 'react-redux';

beforeEach(()=>{
    document.body.innerHTML="";
});
afterEach(()=>{
    cleanup();
});
const mockedData=jest.fn();
jest.mock('react-router-dom',()=>{
    const originalDataDom=jest.requireActual('react-router-dom');
    return{
        __esModule:true,
        ...originalDataDom,
        useNavigate:()=>mockedData,
        useLocation:()=>mockedData,
        useSelector:()=>mockedData
    };
});

describe('Write Test Case for AskNumberOfLots Component',()=>{
    const store=createStore(reducer);
    render(
        <Provider store={store}>
            <AskNumberOfLots/>
        </Provider>
    );
    test('To create snapshots of AskNumberOfLots Component',()=>{
        expect(screen).toMatchSnapshot();
        });
    test('Test Case For InitialState Of Reducer',()=>{
    expect(reducer(undefined,{})).toEqual({
        numberOfLots:[{
            lotid:1,
            assignedTo: null
        },
        {
            lotid:2,
            assignedTo: null
        },
        {
            lotid:3,
            assignedTo: null
        },
        {
            lotid:4,
            assignedTo: null
        },
        {
            lotid:5,
            assignedTo: null
        }
    ]
    
    });
});

// test('Test case for Button',()=>{
//     const buttonId=getByRole('button',{name:/Ask For No Of Lots Available/i});
// });

});