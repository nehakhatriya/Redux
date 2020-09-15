const redux=require('redux')
const createStore= redux.createStore
const initialState={count:0}
//reducer
const reducer=(state=initialState,action)=>{
    if(action.type==='INC_COUNT')
    return {
        ...state,
        count:state.count+1
    };
    if(action.type==='ADD_COUNT')
    return {
        ...state,
        count:state.count+action.value
    };
}

//store
const store=createStore(reducer);

//subscription
store.subscibe(()=>{
    console.log(store.getState())
})


//dispatching action
store.dispatch({type:'INC_COUNT'})
store.dispatch({type:'ADD_COUNT', value:2})
