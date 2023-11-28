import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function Main() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}