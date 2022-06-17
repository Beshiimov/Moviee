import Header from "./Header";
import {connect} from "react-redux";
import headerReducer, {updateSearchTextAction} from "../../Redux/header-reducer";


const mapStateToProps = (state) => {
  return {
    searchText: state.headerReducer.searchText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: (text) => {
      dispatch(updateSearchTextAction(text));
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;