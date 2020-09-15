import * as actionTypes from './actions'
const initialState={
    results:[]
}

const reducer=(state=initialState,action)=>{
 switch(action.type){
    case actionTypes.STORE_RESULT:
        return {
            ...state,
            results: state.results.concat({id:new Date(),value:action.result})
        }
    case actionTypes.DELETE_RESULT:
        // const id=2
        // const newres=[...state.results]
        // newres.splice(id,1)

        const newArray= state.results.filter((element) => element.id !==action.resultElId)
        return {
          ...state,
          results: newArray 
        }
    }
return state
}

export default reducer;