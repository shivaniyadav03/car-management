import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { exitLot } from '../action/action';
import { useNavigate } from 'react-router-dom';


const ParkingArea:React.FC=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const numberOfLots:any[]=useSelector((state:any)=>state.numberOfLots);
    const goToCheckAvailableLots=()=>{
        navigate('/');
    }
    return(
        <div>
          {
              numberOfLots.map((item:any,index:number)=>{
               return(
                   <div style={{display:'flex',flexDirection:'row'}}>
                   {
                       item.assignedTo?<Button color="primary" variant="contained" onClick={()=>{window.prompt('Please pay 10Rs per Hours')?dispatch(exitLot(item.lotid)):''}}>Assign Lot</Button>
                       
                       :<Button color="secondary" variant="contained">Vacant Lot</Button>
                   }
                   </div>
               );
              })
          }
           <br/>
           <br/>
           <Button variant="contained" color="primary" onClick={()=>{goToCheckAvailableLots()}}>Check For Available Lots</Button>
        </div>
    );
}
export default ParkingArea;