import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name:"calculator",
    initialState: {display: "0", operator: "+", ans:"0"},

    reducers: {
        
        clear: (state) => {
            return {display: "0", operator: "+", ans:"0"}
        },

        operation: (state, action) => {
            let newDisplay = "0"
            let newAns = ""
            let newOperator = action.payload
            
            switch(state.operator){
                case "+":
                    newAns = parseFloat(state.display) + parseFloat(state.ans);
                    break;
                case "-":
                    newAns = parseFloat(state.ans) - parseFloat(state.display);
                    break;
                case "x":
                    newAns = parseFloat(state.ans) * parseFloat(state.display);
                    break;
                case "/":
                    newAns = parseFloat(state.ans) / parseFloat(state.display);
                    break;
                default:
                    break;
            }
            newAns = newAns.toString();

            if(action.payload === "="){
                newDisplay = newAns;
                newAns = "0";
                newOperator = "+"
            }
            return {display: newDisplay, operator: newOperator, ans: newAns}
        },

        numberKey: (state, action) => {
            let newDisplay = state.display === "0" ? action.payload : state.display + action.payload;
            
            return {...state, display: newDisplay}
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