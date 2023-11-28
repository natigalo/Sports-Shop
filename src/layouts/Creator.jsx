import NavCreator from "../components/NavCreators"
import { Outlet } from "react-router-dom"

export default function Admin() {
    return (
        <div className="flex flex-col h-full w-full">
            <NavCreator />
            <Outlet />
        </div>
    )
}