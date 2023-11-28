import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
import headers from "../../header";

const allStates = createAsyncThunk("allStates", async (obj) => {
    try {
        const states = await axios(`${apiUrl}states`);
        return { states: states.data.response };
    } catch (error) {
        return null;
    }
});

const statesAction = {
    allStates
}

export default statesAction;