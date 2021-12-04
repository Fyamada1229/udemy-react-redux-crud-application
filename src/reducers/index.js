//すべてのreuducerを結合する
import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({ count });
// 状態を管理したいときに下記のように足していける
//export default combineReducers({ count, age, name });
