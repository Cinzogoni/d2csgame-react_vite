import { configureStore } from "@reduxjs/toolkit";
import apiWebResources from "./apiWebResources";
import apiUsersResources from "./apiUsersResources";
import apiAdminsResources from "./apiAdminResources";
import isUserStates from "./userStates";
import isAdminStates from "./adminStates";

const store = configureStore({
  reducer: {
    apiResources: apiWebResources,
    apiUsers: apiUsersResources,
    userStates: isUserStates,
    apiAdmins: apiAdminsResources,
    adminStates: isAdminStates,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
