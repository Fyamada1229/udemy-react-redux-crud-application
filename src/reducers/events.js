import { READ_EVENTS } from "../action/index";

// 状態の初期
const initialState = { value: 0 };

// 関数の内部で受け取ったtypeでactionに返す
export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return state;
    default:
      return state;
  }
};
