import { Outlet, Link } from "react-router-dom"
import './styles/Layout.css'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout