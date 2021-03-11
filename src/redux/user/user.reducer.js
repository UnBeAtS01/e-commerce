import { UserActionTypes } from './user.types'
const INITIAL_STATE = {
    currUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currUser: action.payload
            }

        default: return state;
    }
}

export default userReducer;