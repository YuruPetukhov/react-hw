import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state: 0) => ({
  value: state
})

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)