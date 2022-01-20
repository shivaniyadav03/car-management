
const InitialValue={
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
};

const randomIntFromInterval = (min: number, max: number) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

 const reducer=(state:any=InitialValue,action:any)=>{
 switch(action.type){
    case 'ASSIGN_LOT':{
        const currentNumberOfLots: any[] = state?.numberOfLots
        const unAssignedLots:any[] = currentNumberOfLots.filter((item:any)=>{
            return item.assignedTo==null;
        });
        Object.keys(action.payload).map(item => {
            const storeInRandomIndex = () => {
                const randomIndex: number = randomIntFromInterval(0,unAssignedLots.length-1);
                console.log('unAssignedLots[randomIndex]?.assignedTo',unAssignedLots[randomIndex]?.assignedTo);
                if(unAssignedLots[randomIndex]?.assignedTo){
                    storeInRandomIndex()
                }else{
                    unAssignedLots[randomIndex].assignedTo = action.payload[item];
                }
            }
            storeInRandomIndex();
        })
        unAssignedLots.map((item: any) => {
            const currentIndex: number = currentNumberOfLots.findIndex((x: any) => item.lotid == x.lotid);
            if(currentIndex !== -1){
                currentNumberOfLots[currentIndex].assignedTo = item.assignedTo
            }
        })
        return {
            ...state,
            numberOfLots: currentNumberOfLots
        }
    }
    default:return {
        ...state
    }
 }
}
export default reducer;