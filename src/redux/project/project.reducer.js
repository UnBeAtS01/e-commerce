import ProjectActionTypes from './project.types'
const INITIAL_STATE = {
    show: false
}
const Project = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProjectActionTypes.projectBY:
            return {
                ...state,
                show: !state.show,
            };

        default: return state;
    }
}

export default Project;