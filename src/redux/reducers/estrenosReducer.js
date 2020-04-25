import tipo from '../actions/tipo';

const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tipo.GET_ESTRENOS:
            return state
        default:
            return state
    }
}