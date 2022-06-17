import HomePage from "./HomePage";
import homePageReducer, {
  nextPageAction, prevPageAction,
  updateListAction,
  updatePageAction
} from "../../Redux/homePage-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    list: state.homePageReducer,
    page: state.homePageReducer.page,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateListAction: (data) => {
      dispatch(updateListAction(data))
    },
    updatePageAction: (page) => {
      dispatch(updatePageAction(page))
    },
    prevPage: () => {
      dispatch(prevPageAction());
    },
    nextPage: () => {
      dispatch(nextPageAction());
    },
  }
}
const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default HomePageContainer;