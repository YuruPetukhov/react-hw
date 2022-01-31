import React, {useState} from 'react'
import './counter.css'



export const Counter:React.FC =(): JSX.Element =>{
    let [state, setState]= React.useState<number>(0)
    return(
        <div className={'counter'}>
           <div className={'results'}>{state} {}</div>
           <div className="panel">
           <button className={'plusButton'} onClick={()=> setState(state + 1)}>+</button>
           <button className={'dischargeButton'} onClick={()=> setState(state = 0)}>0</button>
           <button className={'minusButton'} onClick={()=> setState(state - 1)}>-</button>
           
           
           </div>
        </div>

    )
} 


// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

// import { faSync } from '@fontawesome/free-solid-svg-icons';

// const dischargeButtonIcon = <FontAwesomeIcon icon={faSync} />;

// class Counter extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             value: 0,
//         }
//     }

//     plus = () => {
//         this.setState((prevState) => ({
//             value: prevState.value + 1,
//         }))
//     }

//     minus = () => {
//         this.setState((prevState) => ({
//             value: prevState.value - 1,
//         }))
//     }

//     discharge = () => {
//         this.setState({
//             value: 0,
//         })
//     }

//     render(){
//         return (
//             <div className="counter">
//                 <div className="result">
//                     {this.state.value}
//                 </div>
//                 <button className="plusButton" onClick={this.plus}></button>
//                 <button className="dischargeButton" onClick={this.discharge}>{dischargeButtonIcon}</button>
//                 <button className="minusButton" onClick={this.minus}></button>
//             </div>
//         )
//     }
// }


export default Counter;