import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl"
import headers from "../../header"

const destroyCreator = createAsyncThunk(
    "destroyCreator",
    async (obj) => {
        try {
            let one = await axios.delete(apiUrl + "creators/" + obj.creator_id, headers())
            return {
                id_to_delete: one.data.response 
            }
        } catch (error) {
            return null
        }
    }
)

const updateCreator = createAsyncThunk(
    "updateCreator",
    async (obj) => {
        try {
            let one = await axios.put(apiUrl + "creators/" + obj.creator_id,
             {
                active : obj.active,
            }, headers())
            return one.data.response
        } catch (error) {
            return null
        }
    }
)

const creatorsActions = {
    destroyCreator,
    updateCreator
}

export default creatorsActions