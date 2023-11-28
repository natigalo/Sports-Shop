import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
import headers from "../../header";
import Swal from "sweetalert2";

const save_name = createAction("save_name", (obj) => {
  return { payload: { name: obj.name } };
});

const save_checks = createAction("save_checks", (obj) => {
  return { payload: { checks: obj.checks } };
});

const destroyProduct = createAsyncThunk("destroyProduct", async (obj) => {
  try {
      const result = await new Promise((resolve) => {
          Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                  Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                  );
                  resolve(true); // Resuelve la promesa si se confirma la eliminación
              } else {
                  resolve(false); // Resuelve la promesa si se cancela la eliminación
              }
          });
      });

      if (result) {
          const one = await axios.delete(apiUrl + "products/" + obj.product_id, headers());
          return {
              id_to_delete: one.data.response
          };
      } else {
          // La eliminación fue cancelada, puedes devolver algo adecuado o lanzar un error.
          throw new Error('Eliminación cancelada');
      }
  } catch (error) {
      // Maneja errores aquí
      return null;
  }
});

const updateProduct = createAsyncThunk("updateProduct", async (obj) => {
  try {
    let one = await axios.put(
      apiUrl + "products/" + obj.product_id,
      {
        name: obj.name,
        category_id: obj.category_id,
        price: obj.price,
        stock: obj.stock,
        sex: obj.sex,
        url_photo: obj.url_photo,
        description: obj.description,
      },
      headers()
    );
    return one.data.response;
  } catch (error) {
    return null;
  }
});

const productsActions = {
  save_name,
  save_checks,
  destroyProduct,
  updateProduct,
};

export default productsActions;
