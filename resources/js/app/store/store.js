import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../_redux/app-slice';
import profilingSlice from '../pages/admin/profiling/_redux/profiling-slice';
import usersSlice from '../pages/admin/user_management/_redux/user-management-slice';

const store = configureStore({
    reducer: {
        app: appSlice,
        profiling: profilingSlice,
        users: usersSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
