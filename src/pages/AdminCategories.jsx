import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import categories_actions from '../store/actions/categories';
const { read_categories, update_category, create_category, destroy_category } = categories_actions
import ModalNewCategory from '../components/ModalNewCategory'
import ModalNewProduct from '../components/ModalNewProduct'

export default function AdminCategories() {
	const allCategories = useSelector(store => store.categories.categories)
	const dispatch = useDispatch()

	const [reload, setReload] = useState(false)
	const [show, setShow] = useState(false)
	const [add, setAdd] = useState(false)
	const [editP, seteditP] = useState({});

	useEffect(() => {
		dispatch(read_categories())
	}, [reload])

	const editOpen = (each) => {
		seteditP(each)
	}

	return (
		<>
			<div className='flex w-full h-screen'>
				<div className='lg:w-[750px] xl:w-[650px]'></div>
				<div className='w-full flex flex-col items-center pt-[180px] lg:pt-[30px] lg:pr-5 xl:pr-7 2xl:pr-10'>
					<h1 className='text-[40px] font-bold'>Categories</h1>
					<div className='flex flex-col justify-center items-center w-full pt-5'>
						<div className='flex justify-end items-center w-[90%] lg:w-[95%] pr-2'>
							<h1 className='text-[20px] font-bold'>New</h1>
							<svg onClick={() => { setShow(!show), setAdd(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 mt-1 cursor-pointer transition hover:scale-105">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div className='flex flex-col justify-center items-center w-full'>
							<table className="w-[90%] lg:w-[95%]">
								<tbody className=" w-full rounded-lg">
									<tr className="w-full text-center bg-blue text-white">
										<th className="border-b-2 border-blue w-[15%] lg:w-[25%]">
											Name
										</th>
										<th className="border-b-2 border-blue w-[5%] lg:w-[10%]">
											Total Products
										</th>
										<th className="border-b-2 border-blue w-[5%] lg:w-[7%]">
											Actions
										</th>
									</tr>
									{(allCategories.length !== 0) ? (
										allCategories?.map((each, index) =>
											<tr className="w-full text-center" key={index}>
												<th className="border border-slate-400 lg:w-[25%] font-normal ">
													{each.name.toUpperCase()}
												</th>

												<th className="border border-slate-400 lg:w-[10%] font-normal">
													{each.stock}
												</th>
												<th className="border border-slate-400 lg:w-[7%] font-normal">
													<div className='flex justify-center'>
														<svg onClick={() => { setShow(!show), editOpen(each) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 cursor-pointer transition hover:scale-105">
															<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
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
					</div>

					{show && <ModalNewCategory show={show} setShow={setShow} setAdd={setAdd} add={add} reload={reload} setReload={setReload} editP={editP} seteditP={seteditP} />}

				</div>
			</div>


		</>
	)
}
