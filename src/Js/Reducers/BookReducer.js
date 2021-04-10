import { ADD_TO_BUY, ADD_TO_READ, ADD_TO_SHARE, DELETE_FROM_BUY, DELETE_FROM_READ } from "../Const/ActionTypes";
import { bookList } from "../Const/bookList";
import { Genres } from "../Const/Genres";

const initialstate = {
  bookList: [...bookList],
  genres: [...Genres],
  myList: [],
  total: 0,
};

const BookReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_TO_BUY:
      return { ...state, total: state.total + payload };
    case ADD_TO_READ:
      return {...state,myList:[...state.myList,payload]};
    case ADD_TO_SHARE:
      return {...state,bookList:[...state.bookList,payload]}
    case DELETE_FROM_BUY:
      return {...state,total:state.total-payload}
    case DELETE_FROM_READ:
      return {...state,myList:state.myList.filter(title=>title!==payload)}
    default:
      return state;
  }
};

export default BookReducer;
