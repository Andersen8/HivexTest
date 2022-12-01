import { omit } from 'lodash';
import { ADD_PERSON_TO_BOOKMARKS, REMOVE_PERSON_FROM_BOOKMARKS } from '../constants/actiontypes';
import { getLocalStorage } from '../../utils/localStorage';

const initialState = getLocalStorage("store")

const rootReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case ADD_PERSON_TO_BOOKMARKS:
            return {
                ...state, 
                ...action.payload
            }
        case REMOVE_PERSON_FROM_BOOKMARKS: {
            return omit(state, [action.payload])
        }
        default:
            return state;
    }
};

export default rootReducer;