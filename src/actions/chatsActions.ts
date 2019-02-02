import * as types from "./actionTypes";

const url = "http://localhost:8080/api/v1/chats";

export function receiveChats(json: any) {
  return { type: types.RECEIVE_CHATS, chats: json };
}

export function fetchChats() {
  return (dispatch: any) => {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(receiveChats(json))
      })
      .catch(error => console.log("error", error));
  };
}
