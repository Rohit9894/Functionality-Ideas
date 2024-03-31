import { INC, DEC } from "./actionTypes";
export const increment = (payload) => ({ type: INC, payload: payload });
export const decrement = (payload) => ({ type: DEC, payload: payload });
