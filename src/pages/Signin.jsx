import Google from "/Images/Google.png"
import img from '/Images/FondoM.jpeg'
import arrow from '/Images/Arrow.png'
import { Link as Anchor } from 'react-router-dom'
import { useRef } from "react"
import axios from "axios"
import apiUrl from "../apiUrl.js"
import Swal from "sweetalert2"

export default function Signin() {
  const connected = JSON.parse(localStorage.getItem('user'));
  const loginForm = async () => {
    const data = {
      email: email.current.value?.trim(),
      password: password.current.value?.trim(),
    }

    axios.post(apiUrl + 'auth/login', data).then((res) => {
      localStorage.setItem('token', res.data.response.token);
      localStorage.setItem('user', JSON.stringify(res.data.response.user));
      Swal.fire({
        icon:'success',
        iconColor: '#F4A020',
        html:'Welcome to Momentum X',
        showConfirmButton: false
      })
      setTimeout(() => window.location.replace('/'), 1000);
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        html: err.response.data.messages.map(message => `<p>${message}</p>`).join(''),
        confirmButtonColor: "#F97316"
      });
    });
  }
  const email = useRef();
  const password = useRef();
  return (

    <div className='flex w-full min-h-screen justify-center'>
      <Anchor to={'/'}><img src={arrow} alt="" className='absolute left-10 top-10 w-8 h-4' /></Anchor>
      <div className='min-h-full w-full flex flex-col justify-center items-end md:pr-[10%] md:py-20 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
        <div className="flex flex-col items-center justify-center w-full md:w-[65%] lg:w-[45%] min-h-full py-8 bg-white bg-opacity-20 md:bg-opacity-40 md:rounded-2xl">
          <form className='flex flex-col items-center justify-center w-full' >
            <h1 className='font-semibold text-lg py-5 text-white'>CONNECT!</h1>
            <h2 className='text-center font-semibold text-white'>Enjoy all our products</h2>
            <div className='flex flex-col py-5 w-full items-center'>
              <div className='flex flex-col w-[50%]'>
                <label className='font-light text-sm text-white'>Email</label>
                <input type="text" ref={email} className='rounded-lg mb-7 font-thin px-2 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
                <label className='font-light text-sm text-white'>Password</label>
                <input type="password" ref={password} className='rounded-lg font-thin px-2 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
              </div>
            </div>
          </form>

          <div className='mt-5 flex flex-col items-center'>
            <button onClick={loginForm} className='bg-[#EC6B2F] rounded-lg py-2 w-[70%] flex justify-center mt-4 text-center text-white transition hover:scale-105 hover:border'>SIGN IN</button>
            {/* <button className="flex bg-white text-black py-2 w-[70%] rounded-lg justify-center mt-5 transition hover:scale-105"><span className="pr-2"><img className='w-6 bg-white' src={Google} /></span> Google </button> */}
            <h2 className=' text-center mt-10 ml-1 text-white'>Don't have an account yet? <Anchor to="/signup" className='font-bold'>Register here!</Anchor></h2>
          </div>
        </div>
      </div>
    </div>
  )
}
