import { Button, Input } from '@material-ui/core';
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { assignLots } from '../action/action';

type Location={
    inputForAvailableLots:number;
};
const AvailableLots:React.FC=()=>{
    const navigate=useNavigate();
    const location=useLocation();
    const dispatch: any = useDispatch();
    const initialValue: any = {};
    const [stateData]=useState<any | string>(location.state || '');
    const {inputForAvailableLots}=stateData;
    // const {inputForAvailableLots}=location.state as Location;
    const [carInfo, setCarInfo] = useState(initialValue);
    const getRegistrationNumber=(e:any, index: number)=>{

        const currentCarInfo: any = {...carInfo};
        currentCarInfo[index] = e.target.value;
        setCarInfo(currentCarInfo);
    }

    const onSubmit=()=>{
        dispatch(assignLots(carInfo));
        setCarInfo('');
        navigate('/parkingArea');
    }
    return(
        <div>
         <h1>Hello i am from available lots</h1>
         {Array.from(Array(inputForAvailableLots).keys()).map((item: number, index: number) => {
             return <Input type="text" value={carInfo[index] || ''} onChange={(e: any) => getRegistrationNumber(e, index)} placeholder='Enter Car Registration Number'/>
         })}
         <br/>
         <br/>
         <Button variant="contained" color="primary" onClick={()=>{onSubmit()}}>Submit</Button>
        </div>
    );
}
export default AvailableLots;