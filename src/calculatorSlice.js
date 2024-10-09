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
            
            newAns = Number(newAns.toFixed(4)).toString();

            if(action.payload === "="){
                newDisplay = newAns;
                newAns = "0";
                newOperator = "+"
            }
            return {display: newDisplay, operator: newOperator, ans: newAns}
        },

        numberKey: (state, action) => {
            const newDisplay = (state.display === "0") ? action.payload : state.display + action.payload;
            return {...state, display: newDisplay}
        },

        decimalKey: (state) => {
            const newDisplay = state.display.includes(".") ? state.display : state.display + ".";
            return {...state, display: newDisplay}
        },

        percentageKey: (state) => {
            const newDisplay = Number((parseFloat(state.display) / 100 ).toFixed(4)).toString();
            return {...state, display: newDisplay}
        },

        negateKey: (state) => {
            const newDisplay = state.display === "0" ? state.display : state.display.charAt(0) === "-" ? state.display.slice(1) : "-" + state.display;
            return {...state, display: newDisplay}
        }

    }
});

export const {clear, operation, numberKey, decimalKey, percentageKey, negateKey} = calculatorSlice.actions;
export default calculatorSlice.reducer;