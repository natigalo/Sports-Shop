import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import apiUrl from "../apiUrl.js"
import Swal from "sweetalert2";
import header from "../header.js"

export default function NewProduct({ setShow, show, setReload, reload }) {

	const navigate = useNavigate();

	const [categories, setCategories] = useState([]);
	useEffect(() => {
		axios.get(apiUrl + "categories").then(res => setCategories(res.data.response)).catch(error => console.log(error));
	}, [])

	const create = () => {

		setReload(!reload)

		let data = {
			name: name.current.value,
			category_id: category.current.value,
			price: price.current.value,
			stock: stock.current.value,
			sex: sex.current.value,
			url_photo: photo.current.value,
			description: description.current.value,
		}

		axios
			.post(apiUrl + "products", data, header())
			.then(() =>
				Swal.fire({
					icon: "success",
					title: "Product created",
					confirmButtonColor: "#F97316"
				}))
			.then(() => { navigate("/adminproducts/1"), setShow(!show) })

			.catch((error) =>
				Swal.fire({
					icon: "error",
					title: "Error Creating Product",
					html: error.response.data.messages.map((each) => `<p>${each}</p>`).join(""),
					confirmButtonColor: "#F97316"
				})
			);
	}

	const name = useRef();
	const category = useRef();
	const price = useRef();
	const stock = useRef();
	const sex = useRef();
	const photo = useRef();
	const description = useRef();

	return (
		<div className="flex flex-col items-center justify-center w-full  min-h-full py-8 bg-[#EDF2F4] text-black">
			<form className='flex flex-col items-center justify-center w-full' >
				<h1 className='font-bold text-[30px] py-3'>NEW PRODUCT</h1>

				<div className='flex flex-col py-5 w-full items-center'>
					<div className='flex w-full justify-center'>
						<div className='flex flex-col w-[45%] pr-5'>
							<label className='font-medium text-sm pl-1 pb-1'>Name</label>
							<input ref={name} type="text" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
						</div>

						<div className='flex flex-col w-[45%]'>
							<label className='font-medium text-sm pl-1 pb-1'>Category</label>
							<select ref={category} defaultValue="" className="rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10" name="categories" id="selectCat">
								<option disabled value=""></option>
								{categories?.map((item, index) => (<option key={index} className="text-black" value={item._id}>{item.name}</option>))}
							</select>
						</div>
					</div>

					<div className='flex w-full justify-center'>
						<div className='flex flex-col w-[45%] pr-5'>
							<label className='font-medium text-sm pl-1 pb-1'>Price</label>
							<input min="0" ref={price} type="number" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
						</div>

						<div className='flex flex-col w-[45%]'>
							<label className='font-medium text-sm pl-1 pb-1'>Stock</label>
							<input min="0" ref={stock} type="number" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
						</div>
					</div>

					<div className='flex w-full justify-center'>
						<div className='flex flex-col w-[45%] pr-5'>
							<label className='font-medium text-sm pl-1 pb-1'>Gender</label>
							<select ref={sex} defaultValue="" className="rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10" name="categories" id="selectCat">
								<option disabled value=""></option>
								<option className="text-black" value="U">U</option>
								<option className="text-black" value="H">H</option>
								<option className="text-black" value="M">M</option>
							</select>
						</div>

						<div className='flex flex-col w-[45%]'>
							<label className='font-medium text-sm pl-1 pb-1'>Photo</label>
							<input ref={photo} type="url" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
						</div>
					</div>

					<div className='flex w-full justify-center'>
						<div className='flex flex-col w-[90%]'>
							<label className='text-sm font-medium pl-1 pb-1'>Description</label>
							<textarea ref={description} type="text" className='resize-none rounded-lg  font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-[100px]' />
						</div>
					</div>
				</div>
			</form>

			<div className='flex flex-col items-center'>
				<button onClick={create} className='bg-[#EC6B2F] rounded-lg py-2 px-5 flex justify-center text-center text-white transition hover:scale-105 hover:border'>CREATE</button>
			</div>
		</div>
	)
}
