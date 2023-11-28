import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../apiUrl";
import headers from '../header';
import { Link as Anchor } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import cartAction from '../store/actions/carts'
const { updateProductCart } = cartAction;

export default function CreatorOrders() {

    const dispatch = useDispatch();

    const [reload, setReload] = useState(false);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [orders, setOrders] = useState([]);
    const [states, setStates] = useState([]);

    useEffect(() => {
        axios(`${apiUrl}carts/creator`, headers()).then(res => {
            setOrders(res.data.response);
        }).catch(error => console.error(error));
    }, [reload])

    useEffect(() => {
        axios(`${apiUrl}states`).then(res => {
            setStates(res.data.response);
        }).catch(err => console.error(err));
    }, [])

    const update = async (id, e) => {
        await dispatch(updateProductCart({ cart_id: id, state_id: e.target.value }))
        setReload(!reload);
    }

    return (
        <div className='flex w-full h-screen'>
            <div className='lg:w-[750px] xl:w-[650px]'></div>
            <div className='w-full flex flex-col items-center pt-[180px] lg:pt-[30px] lg:pr-5 xl:pr-7 2xl:pr-10'>
                <h1 className='text-[40px] font-bold'>Products</h1>
                <div className="flex flex-col justify-center items-center w-full pt-5">
                    <table className="w-[90%] lg:w-[95%]">
                        <tbody className=" w-full rounded-lg">
                            <tr className="w-full text-center bg-blue text-white">
                                <th className="border-b-2 border-blue w-[15%] lg:w-[25%]">
                                    Order ID
                                </th>
                                <th className="border-b-2 border-blue w-[10%] lg:w-[20%]">
                                    Product
                                </th>
                                <th className="border-b-2 border-blue w-[5%] lg:w-[10%]">
                                    State
                                </th>
                                <th className="border-b-2 border-blue w-[5%] lg:w-[10%]">
                                    Quantity
                                </th>
                            </tr>

                            {(orders.length !== 0) ? (
                                orders?.map((each, index) =>
                                    <tr className="w-full text-center " key={index}>
                                        <th className="border border-slate-400 lg:w-[25%] font-normal">
                                            {each._id}
                                        </th>
                                        <th className="border border-slate-400 lg:w-[20%] h-[50px] font-normal">
                                            <Anchor to={`/details/${each.product_id}`} className="bg-orange bg-opacity-70 p-2 rounded-lg text-white"> View Product </Anchor>
                                        </th>
                                        <th className="border border-slate-400 lg:w-[10%] font-normal">
                                            <select onChange={(e) => update(each._id, e)}>
                                                {states.map(state => <option value={state._id} selected={state.name == each.state_id.name}> {state.name} </option>)}
                                            </select>
                                        </th>
                                        <th className="border border-slate-400 lg:w-[10%] font-normal">
                                            {each.quantity}
                                        </th>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan={6} className="w-[200px] p-2 text-center text-[20px]">Products not found</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center pt-2 pb-5">
                    {prev &&
                        <button className='bg-blue text-white rounded-full m-5 p-2 transition hover:scale-110' onClick={(e) => { actionNextOrPrev(prev) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>}
                    {next &&
                        <button className='bg-blue text-white rounded-full m-5 p-2 transition hover:scale-110' onClick={() => { actionNextOrPrev(next) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>}
                </div>
            </div>
        </div>
    )
}