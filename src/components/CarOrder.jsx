import { Link as Anchor } from 'react-router-dom';
import destroy from "/Images/eliminar.svg"

export default function CardOrder({ name, price, stock, image, quantity, action, product_id }) {
    return (
        <div className="transition hover:scale-105 shadow-black shadow-lg flex justify-between mt-4 bg-blue bg-opacity-90 w-[99%] md:w-[80%] lg:w-[600px] xl:w-[750px] h-48 md:h-[270px]  rounded-xl ">
            <div className="h-full lg:w-1/3 w-[300px]  flex justify-center items-center ">
                <img src={image} alt="" className="w-full h-full object-cover object-center rounded-s-lg" />
            </div>
            <div className="flex flex-col justify-around ms-8 md:ms-7 lg:mt-4 lg:w-[45%] w-[70%] mb-5 mr-10 md:mr-14 text-white">
                <div className="flex flex-col justify-between md:text-[25px] xl:text-[25px] lg:text-[20px] ">
                    <p> {name} </p>
                    <p className="mt-[1px]">Price: ${price}</p>
                    <p> Quantity: {quantity} </p>
                    <p> Stock: {stock} </p>
                </div>
                <div className="flex justify-around">
                    <Anchor to={`/details/${product_id}`} className="transition hover:scale-110 shadow-black shadow-md cursor-pointer bg-slate-500 rounded-full w-[50px] h-[50px] flex justify-center items-center text-center text-white xl:font-bold ml-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                    </Anchor>
                    <Anchor to={`/products/:category/1`} className="transition hover:scale-110 shadow-black shadow-md cursor-pointer bg-orange rounded-full w-[50px] h-[50px] flex justify-center items-center text-center text-white xl:font-bold mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                    </Anchor>
                </div>
            </div>

            <img onClick={action} src={destroy} alt="Delete" className="w-7 h-7 hover:cursor-pointer mt-2 mr-3" />

        </div>
        
        // <div className="flex justify-between bg-opacity-25 border-y-4 border-violet-950 w-[480PX] h-[210PX] -ml-24 mt-24 xl:w-[900px] xl:h-[300px] xl:ml-12">
        //     <img className="p-3 mt-1 justify-self-auto w-[210px] h-[200px] xl:w-[260px] xl:h-[280px] xl:mt-2" src={img} />
        //     <div className="flex flex-col  justify-around">
        //         <h2 className="text-xl mt-5 font-bold mr-36 "> {name} </h2>
        //         <h3 className="tex-center text-lg font-normal"> {data} </h3>
        //         <p className=""> {order_id} </p>
        //         <p className=""> {total} </p>
        //     </div>
        //     <div className="flex flex-col justify-around">
        //         <Anchor to={`/details/${product_id}`} className="cursor-pointer bg-slate-500 rounded-full w-[50px] h-[50px] flex justify-center items-center text-center text-white xl:font-bold ml-0 xl:w-[200px]">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        //                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        //             </svg>
        //             <p className='hidden xl:inline'> View Product </p>
        //         </Anchor>
        //         <Anchor to={`/products/:category/1`} className="cursor-pointer bg-orange rounded-full w-[50px] h-[50px] flex justify-center items-center text-center text-white xl:font-bold mr-3 xl:w-[200px]">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        //                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        //             </svg>

        //             <p className='hidden xl:inline'>Repurchase</p>
        //         </Anchor>
        //     </div>
        // </div>
    )
}