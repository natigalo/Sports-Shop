import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import apiUrl from "../apiUrl";
import statesAction from '../store/actions/states';
import header from "../header";
const { allStates } = statesAction;
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";

export default function ProductDetails({ product }) {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(allStates({}))
	}, []);

	const states = useSelector(store => store.states.states);

	const { id } = useParams();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [imageUrl, setImageUrl] = useState("");
	const [gender, setGender] = useState("");
	const [stock, setStock] = useState(0);
	const [options, setOptions] = useState([]);
	const [category, setCategory] = useState("");
	const [similarProduct, setSimilarProduct] = useState([]);
	// const [review, setReview] = useState("");
	// const [reviews, setReviews] = useState([]);
	const quantity = useRef();
	const navigate = useNavigate();


	useEffect(() => {
		axios(`${apiUrl}products/${id}`).then(res => {
			setName(res.data.response.name);
			setDescription(res.data.response.description);
			setPrice(res.data.response.price);
			setImageUrl(res.data.response.url_photo);
			setGender(res.data.response.sex);
			setStock(res.data.response.stock);
			setCategory(res.data.response.category_id._id);
			let optionsStock = []
			for (let i = 0; i < res.data.response.stock; i++) {
				optionsStock.push(i + 1);
			}
			setOptions(optionsStock);
		})
	}, [])

	useEffect(() => {
		axios(`${apiUrl}products?category=${category}`).then(res => {
			setSimilarProduct(res.data.response);
		})
	}, [])

	const addCart = () => {
		const data = {
			product_id: id,
			quantity: quantity.current?.value,
			state_id: states[0]._id
		}
		axios.post(`${apiUrl}carts`, data, header()).then(res => {
			console.log(res);
			Swal.fire({
				position: 'top-end',
				icon:'success',
				iconColor: '#F4A020',
				html: 'The product has been added to the cart!',
				width: '200px',
				showConfirmButton: false,
				timer: 1800,

			})
		}).catch(error => {
			Swal.fire({
				icon: 'error',
				html: 'You are not logged in. Please log in to enjoy our products!'
			})
			setTimeout(() => navigate("/signin"), 1000)
			console.log(error)
		})
	};

	const act = (id) => {
		window.location.replace('/details/' + id)
	}

	return (
		<div className="container mx-auto my-16 p-6">
			<div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row">
				<div className="md:w-1/2">
					<img src={imageUrl} alt={name} className="w-full rounded-lg" />
				</div>
				<div className="md:w-1/2 mt-4 pl-10 md:mt-0 md:ml-4">
					<h1 className="text-3xl font-semibold mb-2">{name}</h1>
					<p className="text-gray-600 text-sm mb-4">{description}</p>
					<p className="text-2xl text-red-600 mb-4">
						Price ${price.toFixed(2)}
					</p>

					<div className="mb-4 mt-6">
						<div className="flex space-x-4">
							Gender: {gender}
						</div>
					</div>

					<div className="mb-16 mt-6">
						<select ref={quantity} className="w-[50px] text-center">
							{options.map((option, index) => <option key={index} value={option} > {option} </option>)}
						</select>
					</div>

					<div className="flex space-x-4">
						<button onClick={() => addCart()} className="bg-orange hover:bg-amber-600 text-white py-2 px-4 rounded-lg">
							Add to Cart
						</button>
						<Anchor to={"/products/:category_id/1"} className="bg-blue text-white  w-[200px] flex items-center justify-center py-2 px-4 rounded-lg">CONTINUE SHOPPING</Anchor>
					</div>
				</div>
			</div>
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-4">YOU MAY ALSO LIKE</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{similarProduct?.map(product =>
						<div key={product._id} className="h-[500px] w-[240px] flex flex-col justify-around bg-white shadow-lg rounded-lg p-4">
							<img src={product?.url_photo} alt={product?.name} className="w-full h-[200px] rounded-lg" />
							<h3 className="text-lg font-semibold mt-2"> {product?.name} </h3>
							<p className="text-gray-600"> ${product?.price.toFixed(2)} </p>
							<button onClick={() => act(product._id)} className="w-full h-[40px] flex items-center justify-center bg-blue hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-2"> Details </button>
						</div>)}
				</div>
			</div>
			{/* <div className="mb-4 mt-14">
				<div>
					<label htmlFor="review" className="text-lg font-semibold mb-4">
						Review
					</label>
				</div>

				<div className="">
					<textarea
						id="review"
						className="bg-gray-100 p-2 rounded-lg w-full"
						placeholder="Write your review here..."
						rows="4"
					// value={review}
					// onChange={handleReviewChange}
					></textarea>
				</div>

				<div className="flex justify-end">
					<button
						// onClick={handleAddReview}
						className="bg-cyan-700 hover:bg-cyan-800 text-white py-2 px-4 rounded-lg mt-2"
					>
						Submit Review
					</button>
				</div>
			</div>
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
				<ul>
					{reviews.map((r, index) => (
						<li key={index} className="mb-4">
							<p className="text-gray-600">{r.date}</p>
							<p>{r.text}</p>
						</li>
					))}
				</ul>
			</div> */}
		</div>
	);
}
