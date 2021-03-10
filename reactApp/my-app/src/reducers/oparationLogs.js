import {
    ADD_OPERATION_LOG,
    DLETE_ALL_OPERATION_LOG
} from '../actions'

const oparationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const pratationLog ={ 
                description: action.description,
                opratedAt: action.oprated_at
            }

            return state.unshift(pratationLog)
            break;
        case DLETE_ALL_OPERATION_LOG:
            return []
            break;
        default:
            return state
            break;
    }
}

export default oparationLogs