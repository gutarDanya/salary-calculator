import { useDispatch } from "react-redux";
import { Tplan } from "../../utils/Types";
import { plan } from "../../utils/utilsData";
import { AppDispatch, RootState } from "../store";

export const GET_COMPLETED_PLAN: 'GET_COMPLETED_PLAN' = 'GET_COMPLETED_PLAN';
export const GET_ESSENTIAL_PLAN: 'GET_ESSENTIAL_PLAN' = 'GET_ESSENTIAL_PLAN';

interface IgetCompletedPlan {
    readonly type: typeof GET_COMPLETED_PLAN;
    payload: number
}

export const getCompletedPlan = (plan: number) => {
    return {type: GET_COMPLETED_PLAN, payload: plan}
}

interface IgetEssentialPlan {
    readonly type: typeof GET_ESSENTIAL_PLAN;
    payload: number
}

export const getEssentialPlan = (plan: number) => {
    return {type: GET_ESSENTIAL_PLAN, payload: plan}
}


export const getDataOfPlan = () => {
      return async function sendData (dispatch: AppDispatch, getState: RootState) {
        const promise = new Promise((resolve, reject) => {
             setTimeout(() => {
                resolve(JSON.stringify(plan))
            }, 300)
        })
        promise.then((res:any) => {
            return res.json()
        })
        promise.then((res: any) => {
            return dispatch({type: GET_COMPLETED_PLAN, payload: res.completedPlan})
        })
    }
}

type TStatisticsActions = IgetCompletedPlan |
IgetEssentialPlan

export default TStatisticsActions