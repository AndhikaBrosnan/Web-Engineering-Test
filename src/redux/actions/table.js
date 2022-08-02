import { fetchFilter, fetchUsers, fetchPagination } from ".";
import {
  FETCH_USERS,
  FETCH_GENDER,
  FETCH_PAGINATION,
  UPDATE_SORTING,
} from "../actionTypes";

export const fetchData = async (dispatch) => {
  const response = await fetchUsers();
  dispatch({ type: FETCH_USERS, payload: response });
};

export const fetchFilterData = async (dispatch, gender, searchQuery) => {
  const response = await fetchFilter(gender, searchQuery);
  dispatch({ type: FETCH_GENDER, payload: response });
};

export const fetchPaginationData = async (dispatch, currentPage) => {
  const response = await fetchPagination(currentPage);
  dispatch({ type: FETCH_PAGINATION, payload: response });
};

export const updateSortingAction = async (dispatch, sortedData) => {
  const response = await sortedData;
  dispatch({ type: UPDATE_SORTING, payload: response });
};
