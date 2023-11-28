import Banner1 from "/Images/Banner1.png"
import Banner2 from "/Images/Banner2.png"
import Banner3 from "/Images/Banner3.png"
import Banner4 from "/Images/Banner4.png"
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

export default function carrousel() {
    const show_categories = [
        { url: Banner1 },
        { url: Banner2 },
        { url: Banner3 },
        { url: Banner4 },
    ]
    const [autoInterval, setAutoInterval] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mousedOver, setMousedOver] = useState(false);

    const prev = () => {
        const first_slide = currentIndex === 0
        const new_slide = first_slide ? show_categories.length - 1 : currentIndex - 1
        setCurrentIndex(new_slide)
    }
    const next = () => {
        const last_slide = currentIndex === show_categories.length - 1
        const new_slide = last_slide ? 0 : currentIndex + 1
        setCurrentIndex(new_slide)
    }

    const change_slide = (show_index) => {
        prev()
        setCurrentIndex(show_index)
        next()
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevCount) => (prevCount + 1) % show_categories.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [show_categories]);


    return (
        <div className=" flex-col justify-center items-center h-screen w-full pt-6  px-2 md:px-6   group   ">
            < div
                onMouseOver={() => setMousedOver(true)}
                onMouseOut={() => setMousedOver(false)} className="flex items-center relative w-full h-[90%] rounded-2xl bg-center bg-cover duration-500" style={{ backgroundImage: `url(${show_categories[currentIndex].url})` }}>
                <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5    text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prev} size={30} />
                </div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={next} size={30} />
                </div>
                <div className="flex bottom-0 left-1/2 y transform -translate-x-1/2 justify-center  absolute ">
                    {show_categories.map((show_categories, show_index) => (
                        <div key={show_index} className={`text-xl md:text-2xl lg:text-3xl text-gray-600 cursor-pointer ${currentIndex === show_index ? " text-orange opacity-60" : "text-gray-400 opacity-90"}`}
                            onClick={() => change_slide(
                                show_index)}>
                            <RxDotFilled className=" " />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}