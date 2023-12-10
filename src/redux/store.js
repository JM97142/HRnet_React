import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./action/employeeSlice";

export default configureStore({
    reducer: {
        employee: employeeSlice
    }
})