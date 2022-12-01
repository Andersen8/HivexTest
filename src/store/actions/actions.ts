import { ADD_PERSON_TO_BOOKMARKS, REMOVE_PERSON_FROM_BOOKMARKS } from '../constants/actiontypes';

export const setPersonToFavorite = (person: any) => ({
    type: ADD_PERSON_TO_BOOKMARKS,
    payload: person
});

export const removePersonFromFavorites = (personId: any) => ({
    type: REMOVE_PERSON_FROM_BOOKMARKS,
    payload: personId
});