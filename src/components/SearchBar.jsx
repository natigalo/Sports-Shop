import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsActions from '../store/actions/products';
const { save_name } = productsActions;

const SearchBar = ({ action }) => {

    const dispatch = useDispatch();
    const productsStore = useSelector(store => store.products)
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        action(e.target.value);
    };

    return (
        <div className="relative w-full mx-auto z-10 mt-0 mb-4">
            <div className="relative flex items-center">
                <div className="absolute left-0 top-0 w-14 h-full bg-orange flex items-center justify-center rounded-l-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    onChange={(e) => dispatch(save_name({ name: e.target.value }))}
                    id="search-input"
                    type="text"
                    placeholder="Search..."
                    className="block font-poppins font-normal text-[24px] leading-[22.84px] p-[10px] text-center w-full rounded-full border-2 hover:border-primary shadow-md focus:outline-none pl-12 bg-transparent"
                    defaultValue={productsStore.name}
                />
            </div>
        </div>
    );
};

export default SearchBar;
