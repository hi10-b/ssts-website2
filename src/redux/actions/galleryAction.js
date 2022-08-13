import axios from "axios";
import { baseURL } from "../../variables";
import { GalleryActionTypes } from "../constants/actionTypes";

export function getAlbums() {
	return function (dispatch) {
		return axios
			.get(`${baseURL}/gallery`)
			.then((res) => {
				console.log(res);
				dispatch({ type: GalleryActionTypes.SET_GALLERY_ALBUMS, albums: res.data });
			})
			.catch((err) => {
				console.log("error when fetching " + err);
			});
	};
}
