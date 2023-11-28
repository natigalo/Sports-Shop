import arrow from "/Images/arrowSummary.png"
import axios from "axios"
import apiUrl from "../apiUrl"
import { useEffect, useState } from "react"
import header from "../header";

export default function Summary({ products, total }) {
    //  const payment =  async ()=> {axios.post(apiUrl+"/payments",products).then((res)=>window.location.href = response.data.response.body_init_point)}
    const actionsMp = () => {

        const data = carts.map(each => {
            return {               
                    title: each.product_id.name,
                    quantity: each.quantity,
                    currency_id: 'COP',
                    unit_price: each.product_id.price,           
        }
    })
        axios.post(apiUrl + "payments", data).then((res) => window.location.href = res.data)
    }

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        axios(apiUrl + "carts", header()).then((res) => { setCarts(res.data.response.cart); console.log(res.data.response.cart) }).catch(err => console.log(err))
    }, [])

    return (
        <div className="w-full">
            <div onClick={() => actionsMp()} className="bg-blue text-white flex items-center min-w-full w-full justify-between h-9 p-3 hover:scale-105">PAY YOUR ORDER! <img src={arrow} className="w-10 h-3 ms-4" alt="" /></div>
            <h1 className="font-bold mt-2">ORDER SUMMARY</h1>
            <div className="flex flex-col justify-between mt-2">
                {products.map((each, index) => <div key={index} className="flex justify-between">
                    <p> {each.quantity} {each.product_id.name} </p>
                    <p> ${each.quantity * each.product_id.price} </p>
                </div>)}
            </div>
            <div className="flex justify-between mt-1">
                <p>Shipment</p>
                <p>Free</p>
            </div>
            <div className="border border-solid border-gray-400 mt-2" ></div>
            <div className="flex justify-between mt-2 bg-orange bg-opacity-40 font-extrabold ps-1 pr-1">
                <p>Total</p>
                <p> $ {total} </p>
            </div>
            <p className="bg-gray-100 p-6 mt-4 text-justify">FREE SHIPPING FOR MEMBERS + EXPRESS DELIVERY
                Until September 30, take advantage of express delivery for $14. Receive your order the next business day. Applies to orders with confirmed payment until 11:59 pm. <br />Orders with confirmed payment on Fridays after 11:59 pm, will be prepared the following Monday for delivery in 24 hours.
                Also, if you are a member, take advantage of free shipping until September 18 on all your purchases, log in or register to take advantage.</p>
        </div>
    )
}
