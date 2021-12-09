import _ from "lodash";
import {
  CREATE_EVENTS,
  READ_EVENTS,
  DELETE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
} from "../action/index";

// 関数の内部で受け取ったtypeでactionに返す
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENT:
    case CREATE_EVENTS:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
