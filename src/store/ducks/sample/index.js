export const Types = {
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING',
}

const INITIAL_STATE = {
    loading: true,
    errors: [],
}

export default function reducer(state = INITIAL_STATE, action) {
    const { errors } = action

    switch (action.type) {
        case Types.START_LOADING:
            return { ...state, loading: true, errors: [] }
        case Types.STOP_LOADING:
            return { ...state, loading: false, errors }
        default:
            return state
    }
}

const startLoading = () => ({ type: Types.START_LOADING })

const stopLoading = () => ({ type: Types.STOP_LOADING })

export const Creators = {
    startLoading,
    stopLoading,
}
