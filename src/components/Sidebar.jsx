import { useState, useRef, useEffect } from "react";
import { RiCloseLine, RiFilter3Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import SearchBar from "./SearchBar";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import productsActions from '../store/actions/products';
const { save_checks } = productsActions;

const Sidebar = ({ categories, onSearch, refer }) => {
    const dispatch = useDispatch();
    const productsStore = useSelector(store => store.categories)
    console.log(productsStore.checks)

    const inputsChecked = useRef([]);

    const [showSidebar, setShowSidebar] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    }

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    }

    const handleFilterApply = () => {
        const priceFilter = {
            minPrice: parseFloat(minPrice),
            maxPrice: parseFloat(maxPrice)
        };
        onPriceFilterApply(priceFilter);
    }


    const actionsChecks = () => {
        let checks = Object.values(inputsChecked.current).filter(each => each.checked).map(each => each.id);
        dispatch(save_checks({ checks }));
        console.log(checks)
    }


    return (
        <>
            <div className={`w-[80%] sm:w-[40%] lg:max-w-[300px] z-20 fixed top-0  lg:static ${showSidebar ? "left-0 " : "-left-full "
                } h-full lg:h-auto text-white transition-all bg-blue p-4 lg:p-4 lg:shadow-none ${showSidebar ? "lg:rounded-lg" : "rounded-lg"
                }`}
            >
                <SearchBar />
                <h4 className="my-4 text-white lg:text-lg font-semibold">Categories</h4>
                <div className="flex flex-col gap-1 lg:gap-2">
                    <form ref={inputsChecked} className="flex flex-col gap-1 lg:gap-2">
                        {categories.map(category => (
                            <CategoryItem
                                key={category._id}
                                category={category}
                                name={category.name}
                                color={category.color}
                                value={category._id}
                                action={actionsChecks}
                                isChecked={productsStore.checks?.includes(category._id)}
                            />
                        ))}
                    </form>
                </div>

                <h4 className="my-2 lg:my-4 text-white lg:text-lg font-semibold">Price</h4>
                <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="relative">
                        <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                        <input
                            type="number"
                            placeholder="Min"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                            className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                        />
                    </div>
                    <span>-</span>
                    <div className="relative">
                        <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                        <input
                            type="number"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                            className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleFilterApply}
                    className="bg-orange text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200"
                >
                    Apply Filter
                </button>
            </div>
            <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="lg:hidden fixed bottom-4 right-4 bg-orange p-4 rounded-full text-xl"
            >
                {showSidebar ? <RiCloseLine /> : <RiFilter3Line />}
            </button>
        </>
    );
};

export default Sidebar;
