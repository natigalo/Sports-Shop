import { useEffect, useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import apiUrl from "../apiUrl";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import productsActions from '../store/actions/products';
const { save_name, save_checks } = productsActions;
import header from "../header";

function Shop() {
    const productsStore = useSelector(store => store.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputsChecked = useRef();

    const [products, setProducts] = useState([]);
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(false);
    const [categories, setCategories] = useState([]);
    const [pages, setPages] = useState(0);
    const { page, category_id } = useParams();

    const actionNextOrPrev = (numberPage) => {
        navigate(`/products/:category_id/${numberPage}`);
    }

    useEffect(() => {
        axios.get(apiUrl + "categories")
            .then(res => {
                setCategories(res.data.response);
            })
            .catch(error => console.log(error));
    }, [])


    useEffect(() => {
        console.log("Product Name:", productsStore.name);
        console.log("Selected Categories:", productsStore);
        axios.get(apiUrl + `products?name=${productsStore.name}&page=1&category=${productsStore.checks.join(',')}`, header())
            .then(res => {
                setPages(res.data.pages);
                setProducts(res.data.response);
                setNext(res.data.next);
                setPrev(res.data.prev);
            }).catch(error => {
                console.log("Error getting products:", error);
                setProducts([])
                setNext(null);
                setPrev(null);
            });
    }, [productsStore.name, productsStore.checks]);


    useEffect(() => {
        axios.get(apiUrl + `products?title=${productsStore.text}&page=${page}&category=${productsStore.checks.join(',')}`, header())
            .then(res => {
                setProducts(res.data.response);
                setNext(res.data.next);
                setPrev(res.data.prev);
            }).catch(error => {
                console.log(error)
                setProducts([])
                setNext(null);
                setPrev(null);
            });
    }, [page])

    return (
        <div className="min-h-screen flex flex-col mt-16">
            <main className="flex gap-8 p-8 pt-0 mt-10">
                <Sidebar
                    categories={categories}
                    refer={inputsChecked}
                />
                <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="flex-1 h-full flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                            {products.map(product => (
                                <Card key={product._id} product={product} />
                            ))}
                            {products.length === 0 && (
                                <div className="col-span-full row-span-full h-screen flex items-center justify-center">
                                    <span className="text-3xl p-6 text-orange rounded-full font-medium">Results not found!</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <Pagination next={next} prev={prev} page={Number(page)} pages={pages} action={actionNextOrPrev} />
                </div>
            </main>
        </div>
    );
}

export default Shop;
