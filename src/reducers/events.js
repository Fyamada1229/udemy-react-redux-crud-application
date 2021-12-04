import _ from "lodash";
import { READ_EVENTS } from "../action/index";

// 関数の内部で受け取ったtypeでactionに返す
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};
