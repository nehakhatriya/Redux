import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions'
class Counter extends Component {
 

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementHandler} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementHandler}  />
                <CounterControl label="Add 5" clicked={this.props.onAddHandler}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractHandler}  />
            <hr></hr>
            <button onClick={()=>this.props.onStoreResult(this.props.ctr  )} >Store Result</button>
            <ul>
                {this.props.storedResult.map(el=>{
                  return  <li  key={el.id} onClick={()=>this.props.onDeleteResult(el.id)}>{el.value}</li>
                }) }
            </ul>
            </div>
        );
    }
}

 const mapStateToProps = state => {
    return {
     ctr: state.ctr.counter,
     storedResult : state.res.results
    }
 }

 const mapActionToProps= dispatch =>{
   return {
    onIncrementHandler :()=> dispatch(actionTypes.increment()),
    onDecrementHandler :()=> dispatch(actionTypes.decrement()),
    onAddHandler :()=> dispatch(actionTypes.add(5)),
    onSubtractHandler :()=> dispatch(actionTypes.subtract(5)),
    onStoreResult :(result)=> dispatch(actionTypes.storeResult(result)),
    onDeleteResult:(id)=>dispatch(actionTypes.removeResult(id))
   }
 }

export default connect(mapStateToProps,mapActionToProps)(Counter);