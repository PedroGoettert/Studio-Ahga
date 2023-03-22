import { Outlet } from "react-router-dom"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"

import './Default.css'

export function Default() {
    return (
        <div className='layout'>
            <div className="header">
                <Header />
            </div>
            <div className="content">
                <Outlet />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}