import { combineReducers } from "redux";
import items from "./items";
import card from './card';
import filter from './filter';


export default combineReducers ({
    items,
    card,
    filter,
});