import initialState from "./initialState";
import { FETCH_CHATS, RECEIVE_CHATS } from "../actions/actionTypes";

export default function chats(state = initialState.chats, action: any) {
  let newState;
  switch (action.type) {
    case FETCH_CHATS:
      console.log("FETCH_CHATS Action");
      return action;
    case RECEIVE_CHATS:
      newState = action.chats;
      console.log("RECEIVE_CHATS Action");
      return newState;
    default:
      return state;
  }
}
