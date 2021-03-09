const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id, ...event}]
            break;
        case 'DELETE_EVENT':
            return state.filter((event) => {
                return action.id !== event.id
            })
            break;
        case 'DELETE_ALL_EVENT':
            return [];
            break;
        default:
            return state
    }
}

export default events