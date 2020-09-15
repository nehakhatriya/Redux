export const INCREMENT = 'INC_COUNTER';
export const DECREMENT = 'DEC_COUNTER';
export const ADD = 'ADD_COUNTER';
export const SUBTRACT = 'SUB_COUNTER';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment=()=>{
    return {
        type:'INC_COUNTER'
    }
}
export const decrement=()=>{
    return {
        type:'DEC_COUNTER'
    }
}
export const add=(val)=>{
    return {
        type:'ADD_COUNTER',
        value:val
    }
}
export const subtract=(val)=>{
    return {
        type:'ADD_COUNTER',
        value:val
    }
}


export const saveResult= (res)=>{

    return {  
        type:'STORE_RESULT',
        result:res
    }
}
//redux-thunk as middle-ware (runs btw dispatching of action and reducers) which returns function which dispatch action
export const storeResult=(res)=>{
    return (dispatch,getState) =>{
        setTimeout(()=>{
            const oldcounter=getState().ctr.counter
            console.log(oldcounter)
             dispatch(saveResult(res))
        },2000)

    }
}


export const removeResult=(id)=>{
    return {
        type:'DELETE_RESULT',
        resultElId:id
    }
}