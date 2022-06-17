const getResults = 'GET-RESULTS';
const updateList = 'UPDATE-LIST';
const updatePage = 'UPDATE-PAGE';
const nextPage = 'NEXT-PAGE';
const prevPage = 'PREV-PAGE';

const initialState = {
  page: '1',
  results: [],
  total_pages: '',
  total_results: ''
}

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateList:
      return {
        ...state,
        page: action.data.page,
        results: action.data.results,
        total_pages: action.data.total_pages,
        total_results: action.data.total_results,
      }
    case updatePage:
      return {
        ...state,
        page: action.data.page
      }

    case nextPage:
      return {
        ...state,
        page: state.page + 1
      }

    case prevPage:
      if (state.page > 1) {
        return {
          ...state,
          page: state.page -1
        }
      }

    default:
      return state
  }
}


export const getResultAction = () => ({ type: getResults });
export const updateListAction = (data) => ({ type: updateList, data });
export const updatePageAction = (page) => ({ type: updatePage, page });
export const nextPageAction = () => ({type: nextPage })
export const prevPageAction = () => ({type: prevPage })

export default homePageReducer;