import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import apiUrl from '../apiUrl';
import ModalNewProduct from '../components/ModalNewProduct'
import productsActions from '../store/actions/products';
const { save_name, destroyProduct } = productsActions;

export default function AdminProducts() {

	const productsStore = useSelector(store => store.products)

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [show, setShow] = useState(false);
	const [add, setAdd] = useState(false)
	const [products, setProducts] = useState([]);
	const [editP, seteditP] = useState({});
	const [reload, setReload] = useState(false)
	const [next, setNext] = useState(null);
	const [prev, setPrev] = useState(null);
	const { page } = useParams();

	const actionNextOrPrev = (numberPage) => {
		navigate(`/adminproducts/${numberPage}`);
	}

	const deleteProduct = async (each) => {
		await dispatch(destroyProduct({ product_id: each._id }))
		setReload(!reload)
	}

	const editOpen = (each) => {
		seteditP(each)
	}

	useEffect(() => {
		axios.get(apiUrl + `products/admi?name=${productsStore.name}&page=1`)
			.then(res => {
				setProducts(res.data.response.products)
				setNext(res.data.response.after);
				setPrev(res.data.response.before);
				actionNextOrPrev(1);
			})
			.catch(error => {
				console.log(error)
				setProducts([])
				setNext(null);
				setPrev(null);
			});
	}, [productsStore.name, reload])

	useEffect(() => {
		axios.get(apiUrl + `products/admi?name=${productsStore.name}&page=${page}`)
			.then(res => {
				setProducts(res.data.response.products)
				setNext(res.data.response.after);
				setPrev(res.data.response.before);
			})
			.catch(error => {
				console.log(error)
				setProducts([])
				setNext(null);
				setPrev(null);
			});
	}, [page, reload])

	return (
		<div className='flex w-full h-screen'>
			<div className='lg:w-[750px] xl:w-[650px]'></div>
			<div className='w-full flex flex-col items-center pt-[180px] lg:pt-[30px] lg:pr-5 xl:pr-7 2xl:pr-10'>
				<h1 className='text-[40px] font-bold'>Products</h1>
				<div className='z-10 flex justify-center items-center max-[400px]:w-[360px] w-[400px] lg:w-[500px] bg-white pt-10'>
					<div className='bg-blue p-[10px] rounded-l-lg'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
						</svg>
					</div>
					<input onChange={(e) => dispatch(save_name({ name: e.target.value }))} defaultValue={productsStore.name}
						className='border-2 text-black font-normal text-[20px] leading-[22.84px] p-[10px] text-center lg:text-start w-full rounded-r-lg hover:border-blue lg:outline-0'
						type="text"
						placeholder='Search product' />
				</div>
				<div className="flex flex-col justify-center items-center w-full pt-5">
					<div className='flex justify-end items-center w-[90%] lg:w-[95%] pr-2'>
						<h1 className='text-[20px] font-bold'>New</h1>
						<svg onClick={() => {setShow(!show), setAdd(true)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 mt-1 cursor-pointer transition hover:scale-105">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<table className="w-[90%] lg:w-[95%]">
						<tbody className=" w-full rounded-lg">
							<tr className="w-full text-center bg-blue text-white">
								<th className="border-b-2 border-blue w-[15%] lg:w-[25%]">
									Name
								</th>
								<th className="border-b-2 border-blue w-[10%] lg:w-[20%]">
									Category
								</th>
								<th className="border-b-2 border-blue w-[5%] lg:w-[10%]">
									Price
								</th>
								<th className="border-b-2 border-blue w-[5%] lg:w-[10%]">
									Stock
								</th>
								<th className="border-b-2 border-blue w-[5%] lg:w-[5%]">
									Gender
								</th>
								<th className="border-b-2 border-blue w-[5%] lg:w-[7%]">
								</th>
							</tr>

							{(products.length !== 0) ? (
								products?.map((each, index) =>
									<tr className="w-full text-center " key={index}>
										<th className="border border-slate-400 lg:w-[25%] font-normal">
											{each.name}
										</th>
										<th className="border border-slate-400 lg:w-[20%] font-normal">
											{each.category_id.name}
										</th>
										<th className="border border-slate-400 lg:w-[10%] font-normal">
											{each.price}
										</th>
										<th className="border border-slate-400 lg:w-[10%] font-normal">
											{each.stock}
										</th>
										<th className="border border-slate-400 lg:w-[5%] font-normal">
											{each.sex}
										</th>
										<th className="border border-slate-400 lg:w-[7%] font-normal">
											<div className='flex justify-center'>
												<svg onClick={() => { setShow(!show), editOpen(each) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 cursor-pointer transition hover:scale-105">
													<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
												</svg>
												<svg onClick={() => { deleteProduct(each) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer transition hover:scale-105">
													<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
												</svg>
											</div>
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
			{show && <ModalNewProduct show={show} setShow={setShow} setAdd={setAdd} add={add} reload={reload} setReload={setReload} editP={editP} seteditP={seteditP} />}
		</div>
	)
}
