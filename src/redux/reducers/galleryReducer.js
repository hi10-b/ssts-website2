import { GalleryActionTypes } from "../constants/actionTypes";

const initState = {
	galleryAlbums: [],
};

export const galleryReducer = (state = initState, action) => {
	switch (action.type) {
		case GalleryActionTypes.SET_GALLERY_ALBUMS:
			return {
				...state,
				galleryAlbums: action.albums,
			};
		default:
			return state;
	}
};
