import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name:"calculator",
    initialState: {display: "0", operator: "+", ans:"0"},

    reducers: {
        
        clear: (state) => {
            return {display: "0", operator: "+", ans:"0"}
        },

        operation: (state, action) => {
            return {display: "OPERATION", operator: action.payload, ans:"0"}
        },

        numberKey: (state, action) => {
            return {display: action.payload, operator:"", ans:"0"}
        },

        decimalKey: (state) => {
            return {display: "DECIMAL", operator: "+", ans:"0"}
        },

        percentageKey: (state) => {
            return {display: "PERCENTAGE", operator: "+", ans:"0"}
        },

        negateKey: (state) => {
            return {display: "NEGATE", operator: "+", ans: "0"}
        }

    }
});

export const {clear, operation, numberKey, decimalKey, percentageKey, negateKey} = calculatorSlice.actions;
export default calculatorSlice.reducer;