import {dataBaseInstans} from './instanses';


class BaseWorker {
    getBase = async (data: string) => {
        try {
            const response = await dataBaseInstans.get(`${data}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export const baseWorker = new BaseWorker();