import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const Pagination = ({ next, prev, page, pages, action }) => {
    return (
        <nav className="mt-4">
            <ul className="flex justify-center">
                {prev &&
                    <li className="cursor-pointer">
                        <button
                            className='mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200'
                            onClick={() => action(prev)}
                        >
                            <HiChevronDoubleLeft />
                        </button>
                    </li>
                }

                {(page - 1) > 0 && <li className="cursor-pointer">
                    <button
                        value={next}
                        className='mx-1 flex h-9 w-9 items-center border-[1px] border-gray-300 justify-center rounded-full bg-white text-black p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300'
                        onClick={(e) => action(e.target.value)}
                    >
                        {page - 1}
                    </button>
                </li>
                }

                <li className="cursor-pointer">
                    <button
                        className='mx-1 flex h-9 w-9 items-center border-[1px] border-gray-300 justify-center rounded-full bg-orange text-white p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300'
                        onClick={() => action(page)}
                    >
                        {page}
                    </button>
                </li>


                {(page + 1) <= pages && <li className="cursor-pointer">
                    <button
                        value={next}
                        className='mx-1 flex h-9 w-9 items-center border-[1px] border-gray-300 justify-center rounded-full bg-white text-black p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300'
                        onClick={(e) => action(e.target.value)}
                    >
                        {page + 1}
                    </button>
                </li>}


                {next &&
                    <li className="cursor-pointer">
                        <button
                            className='mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200'
                            onClick={() => action(next)}
                        >
                            <HiChevronDoubleRight />
                        </button>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default Pagination;
