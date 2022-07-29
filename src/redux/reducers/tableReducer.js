import {
  FETCH_USERS,
  FETCH_GENDER,
  FETCH_PAGINATION,
  UPDATE_SORTING,
} from "../actionTypes";

const INITIAL_STATE = [];

const tableReducer = (table = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
    case FETCH_GENDER:
    case FETCH_PAGINATION:
      return action.payload.results;
    case UPDATE_SORTING:
      return action.payload;
    default:
      return table;
  }
};

export default tableReducer;
