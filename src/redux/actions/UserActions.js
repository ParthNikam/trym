// src/redux/actions/userActions.js
// import api from "../../services/api_backup"; // Node Api 
import api from "../../services/api_realm"; // Realm Api Service


// Action creators
export const fetchAllUsers = () => async (dispatch) => {
  try {
    const data = await api.fetchAllUsers('');
    dispatch({ type: "FETCH_ALL", payload: data });
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};


export const fetchUserByName = (name) => async (dispatch) => {
  try {
    const data = await api.fetchUserByName(name);
    dispatch({ type: "FETCH_ALL", payload: data });
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};


export const fetchUserById = (userId) => async (dispatch) => {
  try {
    const data = await api.fetchUserById(userId);
    dispatch({ type: "FETCH_ALL", payload: data });
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};


export const updateViews = (name) => async (dispatch) => {
  try {
    const data = await api.updateViews(name);
    dispatch({ type: "FETCH_ALL", payload: data });
    return data; // user.views
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

