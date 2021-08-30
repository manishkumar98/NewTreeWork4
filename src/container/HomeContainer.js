import { connect } from "react-redux";
import { addChild, removeChild, increment, deleteNode } from "../Action";
//import Node from "./Node";
import { nodeId, counter, childIds } from "../reducers/index";
import Home from "../components/Home";
//import { increment } from "../reducer";
const mapDispatchToProps = (dispatch) => ({
  //Jo bhi data bhejna hai

  incrementHandler: () => dispatch(increment()),
  deleteNodeHandler: () => dispatch(deleteNode()),
  addChildHandler: () => dispatch(addChild())
  //incrementHandler: () => dispatch(increment())
});
function mapStateToProps(state, ownProps) {
  console.log(state);
  return state;
}
//Jo bhi data lena hai
function HomeContainer(props) {
  mapDispatchToProps(props);
  mapStateToProps(props);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
/*function mapStateToProps(state, ownProps) {
  return state[ownProps.id];
}

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;*/
