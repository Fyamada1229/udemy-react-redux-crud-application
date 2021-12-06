import axios from "axios";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MULTIPLICATION = "MULTIPLICATION";
export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENTS = "CREATE_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

// アクションクリエイター 画面側で使うので、exportする
export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const multiplication = () => ({
  type: "MULTIPLICATION",
});

// 以下に列挙する関数は全てAction Creatorsです。
// 通常だと、Action CreatorsはActionをreturnしなければいけませんが
// redux-thunkを導入することでActionの代わりに関数をreturnすることができるようになります。
// 以下のAction Creators全ては関数を返します。
//
// axiosは非同期処理です。
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  dispatch({ type: CREATE_EVENTS, response });
};
