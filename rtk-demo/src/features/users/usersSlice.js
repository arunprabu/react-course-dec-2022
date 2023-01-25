import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  userList: [],
  user: {},
  status: "idle",
};

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users", // A name, used in action types
  initialState, // The initial state for the reducer
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // A "builder callback" function used to add more reducers, or
  // an additional object of "case reducers", where the keys should be other
  // action types
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        console.log("pending");
        state.status = 'loading';
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        console.log("fulfilled");
        console.log(action);
        state.status = "idle";
        state.isLoading = false;
        state.isError = false;
        state.userList = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        console.log("rejected");
        state.status = "Some error occurred! Try again later!";
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { addUser, fetchUsers } = usersSlice.actions;
export default usersSlice.reducer;
