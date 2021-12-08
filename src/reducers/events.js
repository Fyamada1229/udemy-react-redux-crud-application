import _ from "lodash";
import { READ_EVENTS, DELETE_EVENT } from "../action/index";

// 関数の内部で受け取ったtypeでactionに返す
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
