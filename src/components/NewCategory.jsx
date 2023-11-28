import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import apiUrl from "../apiUrl.js"
import Swal from "sweetalert2";
import header from "../header.js"

export default function NewCategory({ setShow, show, setReload, reload }) {

  const navigate = useNavigate();

  const name = useRef();
  const color = useRef();

  const create = () => {

    let data = {
      name: name.current.value,
      color: color.current.value,
    }

    axios
      .post(apiUrl + "categories", data, header())
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Category created",
          confirmButtonColor: "#F97316"
        })
      )
      .then(() => { navigate("/admincategories"), setShow(!show), setReload(!reload) })

      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Error Creating Category",
          html: error.response.data.messages.map((each) => `<p>${each}</p>`).join(""),
          confirmButtonColor: "#F97316"
        })
      );
  }


  return (
    <div className="flex flex-col items-center justify-center w-full  min-h-full py-8 bg-[#EDF2F4] text-black">
      <form className='flex flex-col items-center justify-center w-full' >
        <h1 className='font-bold text-[30px] py-3'>NEW CATEGORY</h1>
        <div className='flex flex-col py-5 w-full items-center'>
          <div className='flex w-full justify-center'>
            <div className='flex flex-col w-[45%] pr-5'>
              <label className='font-medium text-sm pl-1 pb-1'>Name</label>
              <input ref={name} type="text" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <div className='flex flex-col w-[45%] pr-5'>
              <label className='font-medium text-sm pl-1 pb-1'>Color (HEX)</label>
              <input ref={color} type="text" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
            </div>
          </div>
        </div>
      </form>

      <div className='flex flex-col items-center'>
        <button onClick={create} className='bg-[#EC6B2F] rounded-lg py-2 px-5 flex justify-center text-center text-white transition hover:scale-105 hover:border'>SAVE</button>
      </div>
    </div>
  )
}

