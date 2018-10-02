/**
./Containers/QuizPageContainer.js

redux container for the Quiz Page Component

**/

//react redux
import { connect } from "react-redux";

// grab the page to map the data to
import QuizPage from "../Components/QuizPage";

// quiz options gen
import { retrieve_potential_quiz_choices } from "../Data/loaded_data";

//redux actions
import {incrementScore} from '../Actions';

//map redux state to component props
const mapStateToProps = state => ({
  collections: state.collections,
  quiz_options: state.quiz_options,
  selected_collection_idx: state.selected_collection_idx,
  selected_item_idx: state.selected_item_idx
});

//map redux dispatch actions to component props
const mapDispatchToProps = dispatch => ({
  incrementScore: () => {
    dispatch(incrementScore());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage);
