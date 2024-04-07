import TStatisticsActions, { GET_COMPLETED_PLAN, GET_ESSENTIAL_PLAN } from "../actions/StatisticsAction";

interface IinitialState {
    completedPlan: number;
    needenPlan: number;
}

const initialState: IinitialState = {
    completedPlan: 0,
    needenPlan: 0
}

const StatisticReducer = (state: IinitialState = initialState, action: TStatisticsActions) : IinitialState => {
switch (action.type) {
    case GET_ESSENTIAL_PLAN: {
        return {
            ...state,
            needenPlan: action.payload
        }
    }
    case GET_COMPLETED_PLAN: {
        return {
            ...state,
            completedPlan: action.payload
        }
    }
    default: return state
}
}

export default StatisticReducer