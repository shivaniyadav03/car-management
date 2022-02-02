import React, { useState } from 'react';
import { Button,Input } from '@material-ui/core';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AskNumberOfLots:React.FC=()=>{
    const [inputForAvailableLots,setInputForAvailableLots]=useState('');
    const navigate=useNavigate();
    const  numberOfLots=useSelector((state:any)=>state.numberOfLots);

    const onSubmit=()=>{
     const unAssignedLots:any[]=numberOfLots.filter((item:any)=>{
      return item.assignedTo==null;
     });
     if(parseInt(inputForAvailableLots)<=unAssignedLots.length){
       navigate('/availableLots',{state:{inputForAvailableLots: parseInt(inputForAvailableLots)}});
     }
     else{
         alert('No lots are available');
     }
        setInputForAvailableLots('');
    }
    const askForAvailableLots=(e:any)=>{
        setInputForAvailableLots(e.target.value);
    }
    return(
        <div>
        <Input type="number" placeholder='Ask for Available Lots' value={inputForAvailableLots} onChange={askForAvailableLots}/>
         <br/><br/>
        <Button data-testid="availibilityOfLots" variant='contained' color='primary' onClick={onSubmit}>Ask For No Of Lots Available</Button>
        </div>
    );
}
export default AskNumberOfLots;