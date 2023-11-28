import { useEffect, useState } from "react";
import eliminar from "/Images/eliminar.svg"

export default function CardCart({ name, price, stock, image, quantity, action, update }) {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        let positions = []
        for (let i = 0; i < stock; i++) {
            positions.push(i);
        }
        setOptions(positions);
    }, [])

    return (
        <div className="transition hover:scale-105 flex justify-between mt-4 bg-blue bg-opacity-90 w-[99%] md:w-[80%] lg:w-[600px] xl:w-[650px] 2xl:w-[750px] h-48 md:h-[210px]  rounded-xl ">
            <div className="h-full lg:w-1/3 w-[300px]  flex justify-center items-center ">
                <img src={image} alt="" className="w-full h-full object-cover object-center rounded-s-lg" />
            </div>
            <div className="flex flex-col justify-around ms-8 md:ms-7 lg:mt-4 lg:w-[45%] w-[70%] mb-5 mr-10 md:mr-14 text-white">
                <div className="flex flex-col  justify-between md:text-[25px] xl:text-[25px] lg:text-[20px] ">
                    <p> {name} </p>
                    <p className="mt-[1px]">Price: ${price}</p>
                </div>
                <p className="lg:text-[20px] lg:w-[50vw]"> {stock > 0 ? "In Stock" : "Not Stock"} </p>
                <div>
                    <select onChange={update} id="cantidad" className="px-2 py-1 bg-transparent font-semibold text-black rounded-md border-[#000000]">
                        {options.map(each => <option key={each} value={each} selected={each===quantity}> {each} </option>)}
                    </select>
                </div>
                {/* <input type="number" name="" id="" defaultValuevalue="1" className="md:w-16 md:h-10 w-9 h-6 rounded-sm text-center border-[1px] border-[#000000]" /> */}
            </div>
            
            <img onClick={action} src={eliminar} alt="" className="w-7 h-7 hover:cursor-pointer mt-2 mr-3" />
            
        </div>
    )
}
