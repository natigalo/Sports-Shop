import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../apiUrl";
import headers from '../header';
import CardOrder from "../components/CarOrder";
import { useDispatch } from 'react-redux';
import cartsAcctions from "../store/actions/carts";
const { destroyProductCart } = cartsAcctions;

export default function Orders() {

    const disptach = useDispatch();

    const [reload, setReload] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios(`${apiUrl}carts`, headers()).then(res => {
            setOrders(res.data.response.cart);
            console.log(res.data.response.cart);
        }).catch(error => console.log(error));
    }, [reload])

    const deleteProduct = async (id) => {
        await disptach(destroyProductCart({ cart_id: id }));
        setReload(!reload);
    }

    return (
        <main className="mt-[148px] mb-[148px] w-full flex items-center justify-center">
            <div className="w-[50%] ">
                <h1 className="flex flex-auto text-4xl font-bold">Mis Pedidos</h1>
                {orders.map(order => <CardOrder
                    key={order._id}
                    name={order.product_id.name}
                    quantity={order.quantity}
                    stock={order.product_id.stock}
                    product_id={order.product_id._id}
                    price={order.product_id.price}
                    action={() => deleteProduct(order._id)}
                    image={order.product_id.url_photo} />)}
            </div>
        </main>
    )
}