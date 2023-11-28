import arrow from '/Images/Arrow.png'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../apiUrl';
import Swal from "sweetalert2"
import seller from '/Images/seller.jpg'
import { useRef } from 'react'
import header from '../header.js'

export default function BeSeller() {

	const navigate = useNavigate();

	const beSell = () => {
		let data = {
			name: name.current.value,
			lastname: lastname.current.value,
			company: company.current.value,
			country: country.current.value,
			city: city.current.value
		}
		axios.post(apiUrl + 'creators', data, header())
			.then((res) => Swal.fire({
				icon: 'success',
				text: 'Seller created!'

			})).then(() => navigate("/"))
			.catch(err => Swal.fire({
				icon: 'error',
				text: 'sign in please!',
				html: err.response.data.messages.map(each => `<p>${each}</p>`).join('')
			}))
	}
	const name = useRef();
	const lastname = useRef();
	const company = useRef();
	const country = useRef();
	const city = useRef();
	return (
		<div className='flex w-full min-h-screen justify-center'>
			<Anchor to={'/'}><img src={arrow} alt="" className='absolute left-10 top-10 w-8 h-4' /></Anchor>
			<div className='min-h-full w-full flex flex-col justify-center items-start md:pl-[15%] md:py-20 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${seller})` }}>
				<form className='flex flex-col items-center justify-center w-full md:w-[65%] lg:w-[40%] min-h-full md:h-[80%] py-8 bg-black bg-opacity-30 md:rounded-2xl text-white' >
					<h1 className='font-semibold py-5 text-2xl'>SELL YOUR PRODUCTS!</h1>
					<div className='flex flex-row mt-10 w-full'>
						<div className='flex flex-col justify-between items-center w-full'>
							<label className='font-light text-sm w-[50%] text-left' htmlFor="Name">Name</label>
							<input type="text" ref={name} className='rounded-lg font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8 w-[50%]' />
							<label className='mt-7 font-light text-sm w-[50%] text-left' htmlFor="email">Lastname</label>
							<input type="text" ref={lastname} className='rounded-lg font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8 w-[50%]' />
							<label className='mt-7 font-light text-sm w-[50%] text-left' htmlFor="Name">Company</label>
							<input type="text" ref={company} className='rounded-lg font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8 w-[50%]' />
							<label className='mt-7 font-light text-sm w-[50%] text-left' htmlFor="email">Country</label>
							<input type="text" ref={country} className='rounded-lg font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8 w-[50%]' />
							<label className='mt-7 font-light text-sm w-[50%] text-left' htmlFor="last name">City</label>
							<input type="text" ref={city} className='rounded-lg mb-7 font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8 w-[50%]' />
						</div>
					</div>
					<div onClick={beSell} className='bg-[#EC6B2F] hover:cursor-pointer rounded-lg px-4 py-2 flex mt-4 hover:border-2 border-orange-500 text-center ' >SELL WITH US</div>
				</form>
			</div>
		</div>
	)
}

