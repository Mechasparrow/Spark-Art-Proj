/**
./Containers/HomePageContainer.js

redux container for the Home Page Component

**/

//react redux
import { connect } from "react-redux";

//Page to map data to
import HomePage from "../Components/HomePage";

//Redux actions
import { select_collection, clear_item_selection } from "../Actions";

//map redux state to component props
const mapStateToProps = state => ({
  collections: state.collections
});

//map redux dispatch actions to component props
const mapDispatchToProps = dispatch => ({
  clearItemSelection: () => {
    dispatch(clear_item_selection());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);