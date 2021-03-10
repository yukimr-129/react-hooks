import {
    ADD_OPERATION_LOG,
    DLETE_ALL_OPERATION_LOG
} from '../actions'

const oparationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const opratationLog ={ 
                description: action.description,
                opratedAt: action.opratedAt
            }

            return [opratationLog, ...state]
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