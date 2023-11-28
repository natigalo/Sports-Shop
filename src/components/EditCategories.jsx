import { useRef } from "react"
import { useDispatch } from 'react-redux';
import categories_actions from '../store/actions/categories';
const { update_category } = categories_actions;


export default function EditCategories({ setReload, reload, editP, show, setShow }) {

    const dispatch = useDispatch();

    const editCategory = (each) => {
        setShow(!show)
        setReload(!reload)
        dispatch(update_category({
            category_id: each._id,
            name: name.current.value,
            color: color.current.value,
        }))
      }

    const name = useRef();
    const color = useRef();

    return (
        <div className="flex flex-col items-center justify-center w-full  min-h-full py-8 bg-[#EDF2F4] text-black">
            <form className='flex flex-col items-center justify-center w-full' >
                <h1 className='font-bold text-[30px] py-3'>EDIT CATEGORY</h1>
                <div className='flex flex-col py-5 w-full items-center'>
                    <div className='flex w-full justify-center'>
                        <div className='flex flex-col w-[45%] pr-5'>
                            <label className='font-medium text-sm pl-1 pb-1'>Name</label>
                            <input defaultValue={editP.name} ref={name} type="text" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
                        </div>
                    </div>
                    <div className='flex w-full justify-center'>
                        <div className='flex flex-col w-[45%] pr-5'>
                            <label className='font-medium text-sm pl-1 pb-1'>Color (HEX)</label>
                            <input defaultValue={editP.color} ref={color} type="text" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
                        </div>
                    </div>
                </div>
            </form>

            <div className='flex flex-col items-center'>
                <button onClick={() => { editCategory(editP) }} className='bg-[#EC6B2F] rounded-lg py-2 px-5 flex justify-center text-center text-white transition hover:scale-105 hover:border'>SAVE</button>
            </div>
        </div>
    )
}
