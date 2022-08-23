import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmFkNjdjOWM2Zjg3MGM3ZTYwZjZjMiIsInVzZXJuYW1lIjoiamFzZWVtQGdtYWlsLmNvbSIsImlhdCI6MTY2MTI3MTUxOSwiZXhwIjoxNjYxMzU3OTE5fQ.9ngCSfvRguHHwAR3uQ6uDoBnLT6vMfWHS4FnauBuiAw",
  },
};

const baseUrl = "https://cbxtrack.herokuapp.com";

//list all users api call
export const listUsers = createAsyncThunk(
  "users/listUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseUrl}/api/user/listUser`, config);
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

//add new user api call
export const addUser = createAsyncThunk(
  "users/addUser",
  async (reqData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${baseUrl}/api/user/adduser`,
        reqData,
        config
      );
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

//update user api call
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userId, reqData, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `${baseUrl}/api/user/updateUser/${userId}`,
        reqData,
        config
      );
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

//get single user api call
export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${baseUrl}/api/user/getSingleUser/${userId}`,        
        config
      );
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);



