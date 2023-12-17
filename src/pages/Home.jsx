import Carrousel from "../components/Carrousel"
import CardCategories from "../components/CardCategories"
import img1 from "/Images/img1.jpg"
import img2 from "/Images/img2.jpg"
import img3 from "/Images/img3.jpg"


export default function Home() {

    return (
        <>
            <main className="flex-col justify-around mt-14 pb-10 w-full">
                <Carrousel />
             {/*    <CardCategories /> */}
                <div className="hidden lg:flex justify-around py-5 px-4 md:px-2 gap-8 bg-gray-200 -mt-4 w-full h-[650px] overflow-x-hidden">
                    <img src={img1} alt="" className="w-1/3 object-cover rounded-s-lg"/>
                    <img src={img2} alt="" className="w-1/3 object-cover"/>
                    <img src={img3} alt="" className="w-1/3 object-cover rounded-r-lg"/>
                </div>
            </main>
        </>
    )
}
