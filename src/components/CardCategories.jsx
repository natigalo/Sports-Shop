import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { Link as Anchor } from 'react-router-dom';
import categories_actions from "../store/actions/categories"
const { read_categories } = categories_actions;

export default function CardCategories() {

    const dispatch = useDispatch()
    const categories = useSelector(store => store.categories.categories);
    
    useEffect(() => {
        dispatch(read_categories())
    }, [])

    return (
        <div className="flex justify-around py-5 px-4 md:px-2 flex-wrap gap-4 bg-gray-200 -mt-14 w-full">
            {categories.map((each) => (
                <Anchor to={`/products/${each._id}`} key={uuidv4()} className="flex-col w-full lg:w-[18.5%] h-[100px] md:[200px] lg:[300px] object-contain rounded-2xl overflow-hidden  shadow-lg">
                    <div className=" flex items-center justify-center h-full w-full bg-cover bg-center rounded-2xl " style={{ backgroundColor: each.color }} >
                        <span className="flex justify-center  items-center text-center  w-full h-full rounded-md m-1 text-2xl md:text-xl  lg:text-2xl font-bold text-gray-800  bg-gray-100 bg-opacity-30 drop-shadow-2xl" >{each.name}</span>
                    </div>
                </Anchor>))}
        </div>
    )
}
