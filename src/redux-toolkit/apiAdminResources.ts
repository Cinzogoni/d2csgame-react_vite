import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { Admin } from "../types/dataType";
import { apiAdmins } from "../services/ProductService";

export const fetchUsers = createAsyncThunk("api/fetchUsers", apiAdmins);

// const savedAdmin = localStorage.getItem("currentAdmin");

const savedAdmin =
  typeof window !== "undefined" ? localStorage.getItem("currentAdmin") : null;

interface AdminState {
  currentAdmin: Admin | null;
  apiLoading: boolean;
  apiError: string | null;
}

const initialState: AdminState = {
  currentAdmin: savedAdmin ? JSON.parse(savedAdmin) : null,
  apiLoading: false,
  apiError: null,
};

const apiAdminsSlice = createSlice({
  name: "apiAdmins",
  initialState,
  reducers: {
    loginSuccessAdmin: (state, action: PayloadAction<Admin>) => {
      state.currentAdmin = action.payload;
      localStorage.setItem("currentAdmin", JSON.stringify(action.payload));
    },
    logoutAdmin: (state) => {
      state.currentAdmin = null;
      localStorage.removeItem("currentAdmin");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.apiLoading = true;
        state.apiError = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.apiLoading = false;
        if (!state.currentAdmin) {
          // Chỉ cập nhật nếu chưa có admin
          state.currentAdmin =
            action.payload.length > 0 ? action.payload[0] : null;
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.apiLoading = false;
        state.apiError = action.error.message || "Failed to fetch admins";
      });
  },
});

const apiAdminsResources = apiAdminsSlice.reducer;

export const { loginSuccessAdmin, logoutAdmin } = apiAdminsSlice.actions;
export default apiAdminsResources;
