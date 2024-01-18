import logo from "../../public/Images/LogoCorto.png"

export default function CreatorPanel() {

    return (
        <div className='flex w-full h-screen'>
            <div className='lg:w-[600px]'></div>
            <div className='w-full flex flex-col items-center pt-[180px] lg:pt-[80px]'>
                <h1 className='text-[40px] font-bold'>Panel</h1>
                <div className='py-5 xl:py-10 grid grid-cols-1 xl:grid-cols-2 w-full md:w-[65%] justify-items-center gap-7'>
                    <div className='rounded-full w-[200px] h-[200px] bg-slate-200 p-2 flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-[30px]'> Products </h1>
                        <p className='text-[24px]'> 45 </p>
                    </div>
                    <div className='rounded-full w-[200px] h-[200px] bg-yellow-200 p-2 flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-[30px]'> Orders </h1>
                        <p className='text-[24px]'> 20 </p>
                    </div>
                </div>
                <img className='w-[320px] h-[180px]' src={logo}></img>
            </div>
        </div>
    )
}