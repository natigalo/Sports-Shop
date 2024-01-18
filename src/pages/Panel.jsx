import logo from "../../public/Images/LogoCorto.png"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react"
import axios from "axios";
import apiUrl from '../apiUrl';
import categories_actions from '../store/actions/categories';
const { read_categories } = categories_actions


export default function Panel() {

	const [totalP, setTotalP] = useState("")
	const [totalC, setTotalC] = useState([])
	const allCategories = useSelector(store => store.categories.categories)
	const dispatch = useDispatch()
	const [isLoading, setIsloading] = useState(true)
 
	useEffect(() => {
		axios.get(apiUrl + `products/admi`)
			.then(res => {
				setTotalP(res.data.response.allProducts)
			})
			.catch(error => {
				console.log(error)
			});
	}, [])

	useEffect(() => {
		axios.get(apiUrl + `creators`)
			.then(res => {
				setTotalC(res.data.response);
			})
			.catch(error => {
				console.log(error)
			});
	}, [])

	useEffect(() => {
		dispatch(read_categories())
			.then(() => setIsloading(false))
			.catch((error) => {
				console.log("Error fetching categories", error)
				setIsloading(false)
			})
	}, [dispatch])
	if (isLoading) {
		return <div>Loading...</div>
	}


	return (
		<div className='flex w-full h-screen'>
			<div className='lg:w-[600px]'></div>
			<div className='w-full flex flex-col items-center pt-[180px] lg:pt-[80px]'>
				<h1 className='text-[40px] font-bold'>Panel</h1>
				<div className='py-5 xl:py-10 grid grid-cols-1 xl:grid-cols-3 w-full md:w-[65%] justify-items-center gap-7'>
					<div className='rounded-full w-[200px] h-[200px] bg-slate-200 p-2 flex flex-col justify-center items-center'>
						<h1 className='font-bold text-[30px]'>Creators</h1>
						<p className='text-[24px]'>{totalC?.length}</p>
					</div>
					<div className='rounded-full w-[200px] h-[200px] bg-yellow-200 p-2 flex flex-col justify-center items-center'>
						<h1 className='font-bold text-[30px]'>Products</h1>
						<p className='text-[24px]'>{totalP}</p>
					</div>
					<div className='rounded-full w-[200px] h-[200px] bg-green-200 p-2 flex flex-col justify-center items-center'>
						<h1 className='font-bold text-[30px]'>Categories</h1>
						<p className='text-[24px]'>{allCategories?.length}</p>
					</div>
				</div>
				<img className='w-[320px] h-[180px]' src={logo}></img>
			</div>
		</div>
	)
}
