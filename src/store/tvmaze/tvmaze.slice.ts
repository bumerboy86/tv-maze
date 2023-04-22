import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseWorker } from "../../api/baseWorker";
import { IShanels } from "../../api/IShanels";
import { IShowShanel } from "../../components/ShowShanel/IShowShanel";

export const getShanelsBase =  createAsyncThunk(
    `tvmaze/getShanelsBase`,
    async (data: string) => {
        return await baseWorker.getBase(`search/shows?q=${data}`);
    }
)

interface tvmazeState {
    shanels: IShanels[],
    shanel: IShowShanel | null,
    loading: boolean,
}

const initialState: tvmazeState  = {
    loading: false,
    shanels: [],
    shanel: null,
}

export const tvmazeSlice = createSlice({
    name: 'tvmaze',
    initialState,
    reducers: {
        getShanels(state, actions: PayloadAction<IShanels[]>) {
            state.shanels = actions.payload.map(item => item);
        },
        setShanelId(state, actions: PayloadAction<IShowShanel>) {
            state.shanel = actions.payload;
        },
        clearChanels(state) {
            state.shanels = [];
        },
    },
    extraReducers: builder => {
        builder
        .addCase(getShanelsBase.pending, (state) => {
            state.loading = true;
        })
        .addCase(getShanelsBase.rejected, (state) => {
            state.loading = false;
        })
        .addCase(getShanelsBase.fulfilled, (state, actions: PayloadAction<IShanels[]>) => {
            state.loading = false;
            state.shanels = actions.payload.map(item => item);
        })
    }
})

export const { getShanels, setShanelId, clearChanels } = tvmazeSlice.actions;

export default tvmazeSlice.reducer;