import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [
        {
            firstName: "Jane",
            lastName: "Doe",
            department: "Marketing",
            startDate: "18-01-2016",
            birthDate: "22-02-1984",
            street: "12, Gambell st",
            city: "Anchorage",
            states: "Alaska",
            zipCode: "99501",
        },
        {
            firstName: "Luke",
            lastName: "Skywalker",
            department: "Engineering",
            startDate: "20-03-2020",
            birthDate: "30-11-1976",
            street: "600, Fayetteville st",
            city: "Clayton",
            states: "Idaho",
            zipCode: "27520",
        },
        {
            firstName: "Leila",
            lastName: "Skywalker",
            department: "Legal",
            startDate: "15-11-2018",
            birthDate: "01-12-1980",
            street: "1407, sw columbia st",
            city: "Portland",
            states: "Maine",
            zipCode: "97201",
        }
    ]
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        allEmployee: (state, { payload }) => {
            state.employees.push(payload)
        }
    }
})

export const { allEmployee } = employeeSlice.actions

export default employeeSlice.reducer