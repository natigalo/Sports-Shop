import img from '/Images/FondoH.jpeg';
import arrow from '/Images/Arrow.png';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';
import Swal from "sweetalert2";


export default function Signup() {
	const navigate = useNavigate()
	const name = useRef()
	const lastName = useRef()
	const email = useRef()
	const password = useRef()
	const confirmPassword = useRef()
	const authorize = useRef()

	const signUp_data = () => {
		let data = {
			name: name.current.value,
			lastName: lastName.current.value,
			email: email.current.value,
			password: password.current.value,
			confirmPassword: confirmPassword.current.value,
			authorize: authorize.current.checked
		}
		console.log(data)
		axios.post(apiUrl + 'auth/register', data)
			.then((res) => Swal.fire({
				icon: 'success',
				text: 'User created!'

			}, setTimeout(() => navigate('/signin'), 2000)))
			.catch(err => Swal.fire({
				icon: 'error',
				text: 'sign in please!',
				html: err.response.data.messages.map(each => `<p>${each}</p>`).join('')
			}))
	}
	return (
		<div className='flex w-full min-h-screen justify-center'>
			<Anchor to={'/'}><img src={arrow} alt="" className='absolute left-10 top-10 w-8 h-4' /></Anchor>
			<div className='min-h-full w-full flex flex-col justify-center items-start md:pl-[15%] md:py-20 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
				<div className="flex flex-col items-center justify-center w-full md:w-[65%] lg:w-[55%] min-h-full py-8 bg-black bg-opacity-30 md:bg-opacity-40 md:rounded-2xl">
					<form className='flex flex-col items-center justify-center w-full '>
						<h1 className='font-semibold py-5 text-lg text-white'>CREATE AN ACCOUNT!</h1>
						<div className='flex flex-col lg:flex-row '>

							<div className='flex flex-col justify-between w-52 lg:mr-2'>
								<label className='font-light text-sm text-white ' htmlFor="Name">First Name</label>
								<input type="text" ref={name} className='rounded-lg  mb-8  font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8' />
								<label className='font-light text-sm text-white' htmlFor="last name">Last Name</label>
								<input type="text" ref={lastName} className='rounded-lg mb-4 font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8' />
								
							</div>

							<div className='flex  flex-col justify-between w-52 lg:ml-2'>
								<label className='font-light text-sm text-white' htmlFor="password">Password</label>
								<input type="password" ref={password} className='rounded-lg mb-8 font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8' />
								<label className='font-light text-sm text-white' htmlFor="confirme pasword">Confirm Password</label>
								<input type="password" ref={confirmPassword} className='rounded-lg mb-4 font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8' />
							</div>
						</div>

						<div className='flex  flex-col justify-between w-52 ml-2 mt-4'>
							<label className='font-light text-sm text-white' htmlFor="email">Email</label>
							<input type="text" ref={email} className='rounded-lg font-thin  text-black focus:border-black-400 active:bg-black-600  h-8' />
						</div>
						<label className='font-light text-[15px] m-2 flex w-3/4 mt-4 items-center justify-center' htmlFor="authorize">
							<input type="checkbox" ref={authorize} className='h-8 w-6 m-2' />
							<p className='text-white'>I declare that I have read and authorize the use of my personal data according to Terms and Conditions of Mometum X.</p>
						</label>
					</form>

					<button type="buttom" onClick={signUp_data} className='bg-[#EC6B2F] rounded-lg py-2 w-[224px] flex justify-center mt-4 text-center text-white transition hover:scale-105 hover:border' >REGISTER</button>
					<h3 className='font-thin mt-6 text-white'>Already have an account? {" "} <Anchor to={'/signin'} className='font-bold text-white'>Signin!</Anchor></h3>
				</div>
			</div>
		</div>
	)
}