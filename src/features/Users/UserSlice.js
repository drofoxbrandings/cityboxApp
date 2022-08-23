import { createSlice } from "@reduxjs/toolkit";
import { listUsers, addUser, updateUser, getSingleUser } from "./UserApis";

const initialState = {
  users: [],
  status: "idle",
  error: null,
  message: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(listUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(listUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(listUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
        state.message = action.payload.message;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
        state.message = action.payload.message;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const getAllUsers = (state) => state.users.users;
export const getUser = (state) => state.users.users;

export default usersSlice.reducer;
