import {configureStore} from "@reduxjs/toolkit";
import postReducer from './postSlice';
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage";

const preloadedState = loadFromLocalStorage();

 const store = configureStore ({
    reducer : {
        posts : postReducer
    },

    preloadedState,
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
  });
  
export default store;

  
  