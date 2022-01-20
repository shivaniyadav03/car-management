
export const assignLots=(data:any)=>{
    return{
        type:'ASSIGN_LOT',
        payload:data
    }
}
export const exitLot=(lotid:number)=>{
    return{
        type:'EXIT_LOT',
        payload:lotid
    }
}