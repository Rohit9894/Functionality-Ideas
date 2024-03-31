import { DEC, INC } from "./actionTypes";
const initState = { count: 0 };
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INC: {
      return {
        count: state.count + action.payload,
      };
    }
    case DEC: {
      return {
        count: state.count - action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
