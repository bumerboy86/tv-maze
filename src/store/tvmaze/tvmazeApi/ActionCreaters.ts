import { baseWorker } from "../../../api/baseWorker";
import { AppDispatch } from "../../store";
import { getShanels, setShanelId } from "../tvmaze.slice";


export const getShanelsBase =  (data: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await baseWorker.getBase(`search/shows?q=${data}`);
        if (response) {
            dispatch(getShanels(response));
        }
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export const getShanelId =  (data: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await baseWorker.getBase(`shows/${data}`);
        if (response) {
            dispatch(setShanelId(response));
        }
        return await response;
    } catch (error) {
        console.log(error);
    }
}