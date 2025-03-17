import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AdminStates = {
  formType: "loginAdmin";
};

const initialState: AdminStates = {
  formType: "loginAdmin",
};

const adminSlice = createSlice({
  name: "adminStates",
  initialState,
  reducers: {
    setFormType: (state, action: PayloadAction<"loginAdmin">) => {
      state.formType = action.payload;
    },
  },
});

const isAdminStates = adminSlice.reducer;

export const { setFormType } = adminSlice.actions;
export default isAdminStates;
