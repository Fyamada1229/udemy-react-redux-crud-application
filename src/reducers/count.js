import { INCREMENT, DECREMENT } from "../action";

// 状態の初期
const initialState = { value: 0 };

// 関数の内部で受け取ったtypeでactionに返す
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      // defalutの時はそのままstateを返す
      return state;
  }
};
