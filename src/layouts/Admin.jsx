import NavbarAdmin from "../components/NavbarAdmin"
import { Outlet } from "react-router-dom"

export default function Admin() {
    return (
        <div className="flex flex-col h-full w-full">
            <NavbarAdmin />
            <Outlet />
        </div>
    )
}

