import { combineReducers } from "redux";
import { eventReducer } from "./eventsReducer";
import { galleryReducer } from "./galleryReducer";
import { userReducer } from "./userReducer";

const allReducers = combineReducers({
	allEvents: eventReducer,
	userReducer: userReducer,
	galleryReducer: galleryReducer,
});

export default allReducers;
