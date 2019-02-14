import { createStore } from 'redux';
import listData from './jsonData';

const initState = {
  myList: listData.mylist,
  recommends: listData.recommendations
};

export const removeAction = id => ({
  type: 'REMOVE_FILM',
  id
});

export const addAction = id => ({
  type: 'ADD_FILM',
  id
});

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'REMOVE_FILM': 
      let film = state.myList.find(ele => ele.id === action.id);
      let newList = state.myList.filter(ele => ele.id !== action.id);
      return {myList: newList, recommends: [...state.recommends, film]};
    case "ADD_FILM":
      let targetFilm = state.recommends.find(ele => ele.id === action.id);
      let newRecommends = state.recommends.filter(ele => ele.id !== action.id);
      return {myList: [...state.myList, targetFilm], recommends: newRecommends};
    default: 
      return state;
  }
}

const store = createStore(reducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

