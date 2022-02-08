import Buttons from "./Buttons"



const Counter = (props:any) => (
  <p>
    {props.value} 
    <Buttons 
      increment={props.increment}incrementOperator='+' 
      decrement={props.decrement}decrementOperator='-'
    />
  </p>
)



export default Counter;