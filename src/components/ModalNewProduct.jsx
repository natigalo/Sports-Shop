import React from 'react'
import NewProduct from './NewProduct'
import EditProduct from './EditProduct'

export default function ModalNewProduct({ show, setShow, setAdd, add, setReload, reload, editP, seteditP }) {
    return (
        <>
            <div className="fixed z-40 top-0 bg-black w-full h-screen opacity-60"></div>
            <div className='fixed z-40 inset-y-[5%] inset-x-[5%]  md:inset-x-[15%] lg:inset-x-[25%] w-full h-full'>
                <div className="relative rounded-2xl w-[90%] md:w-[70%] lg:w-[50%] h-[90%] bg-white border-2 border-blue overflow-auto  ">
                    <div onClick={() => {setShow(!show), setAdd(false)}} className="cursor-pointer absolute p-1.5 rounded-full right-[15px] top-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    {add ? (
                        <NewProduct setShow={setShow} show={show} reload={reload} setReload={setReload}/>
                    ):(
                        <EditProduct setShow={setShow} show={show} reload={reload} setReload={setReload} editP={editP} seteditP={seteditP}/>
                    )}

                </div>
            </div>
        </>
    )
}
