import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
import headers from "../../header";

const destroyProductCart = createAsyncThunk("destroyProductCart", async (obj) => {
    try {
        const destroy = await axios.delete(`${apiUrl}carts/${obj.cart_id}`, headers());
        return { id_destroy: destroy.data.response };
    } catch (error) {
        return null;
    }
})

const updateProductCart = createAsyncThunk("updateProductCart", async (obj) => {
    try {
        let body = obj.quantity ? { quantity: obj.quantity } : { state_id: obj.state_id };
        const update = await axios.put(`${apiUrl}carts/${obj.cart_id}`, body, headers());
        return update.data.response;
    } catch (error) {
        return null;
    }
})

const cartsAcctions = { destroyProductCart, updateProductCart };

export default cartsAcctions;