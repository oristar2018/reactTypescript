import { test, TEST } from "../actions/testAction.ts";

export const testReducer = (state={data: ""}, action) => {
	switch(action.type) {

		case "TEST": 
		return {...state, data: action.data}

		default:
		return state
	}
};

