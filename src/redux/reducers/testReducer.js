import tipos from '../actions/tipo'

const initialState = {
    test: "Hola Mundo Malparidos",
    fecha: new Date()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tipos.UPDATE_FECHA:
            return Object.assign({}, state, {
                fecha: action.payload
            })
        default:
            return state
    }
}