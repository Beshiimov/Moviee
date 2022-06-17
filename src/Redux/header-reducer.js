const updateSearchText = 'UPDATE-SEARCH-TEXT';

const initialState = {
  searchText: '',
};


const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateSearchText:
      return {
        ...state,
        searchText: action.newText,
      }
    default:
      return state
  }
};

export const updateSearchTextAction = (newText) => ({ type : updateSearchText, newText });

export default headerReducer;