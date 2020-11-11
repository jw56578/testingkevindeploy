import { combineReducers } from "redux";

const regions = (state = [], action) => {
  switch (action.type) {
    case "ADD_REGION":
      return [...state, action.value];
    case "REMOVE_REGION":
      const newRegions = [...state];
      newRegions.splice(action.value, 1);
      return newRegions;
    default:
      return state;
  }
};

const loggedIn = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.value);
    default:
      return state;
  }
};

const user = (state = "", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ loggedIn, user, regions });
