
const Buttons = (props: { incrementOperator: any; increment: any; decrementOperator: any; decrement: any; }) => (
  <div>
    <>
    <button onClick={props.increment}>{props.incrementOperator}</button>
    <button onClick={props.decrement}>{props.decrementOperator}</button>
    </>
    {/* <Button operator={props.incrementOperator} onClick={props.increment} />
    <Button operator={props.decrementOperator} onClick={props.decrement} /> */}
  </div>
);
// const Button = ({operator, onClick}) => (
//   <button onClick={onClick}>{operator}</button>
// );


export default Buttons;