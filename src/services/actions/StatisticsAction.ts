import { plan } from "../../utils/utilsData";
import { AppDispatch } from "../store";

export const GET_COMPLETED_PLAN: 'GET_COMPLETED_PLAN' = 'GET_COMPLETED_PLAN';
export const GET_ESSENTIAL_PLAN: 'GET_ESSENTIAL_PLAN' = 'GET_ESSENTIAL_PLAN';

export const getDataOfPlan = () => {
      function sendData (dispatch?: AppDispatch) {
        const promise = new Promise((resolve, reject) => {
             setTimeout(() => {
                resolve(plan)
            }, 300)
        })
        promise.then((res) => {
            return console.log('пизда')
        })
    }
    return sendData()
}