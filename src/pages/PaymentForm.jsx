import Banner from "/Images/Banner7.jpg"
import arrow from '/Images/Arrow.png';
import { Link as Anchor } from "react-router-dom";

export default function PaymentForm() {

    return (
        <div className="flex w-full min-h-screen justify-center items-center bg-no-repeat  bg-cover bg-center" style={{ backgroundImage: `url(${Banner})` }}>
            <Anchor to={'/cart'}><img src={arrow} alt="" className='absolute left-10 top-10 w-8 h-4' /></Anchor>
            <div className="flex flex-col w-full md:w-[600px] h-screen md:h-full items-center justify-center bg-slate-300 bg-opacity-50 p-10 rounded-md  content-center ">
            <div className="flex">
                <h1 className="mb-10 font-bold">PAY YOUR ORDER</h1>
            </div>
            <form className="flex flex-col">
                <div className="grid gap-6 mb-6 grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-amber-700 ">First name</label>
                        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue dark:bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-amber-700 ">Last name</label>
                        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue dark:bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Last Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-amber-700 ">Country</label>
                        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue dark:bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Where are you from?" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-amber-700 ">City</label>
                        <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue dark:bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your city" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-amber-700 ">Address</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue dark:bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-amber-700 ">Number Card</label>
                    <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue dark:bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxxxxxxxxxxxxx" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-amber-700 ">Expired Date</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue dark:bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xx/xx" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-amber-700 ">CVV</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue dark:bg-opacity-90 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••" required />
                </div>

                <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy</button>
            </form>
        </div>

        </div>
        

    )
}
