import { Link } from "react-router-dom"
import "./sidebar.css"
export const Sidebar = () =>{
    return(
        <div className="sidebar">
            <ul>
                <Link to="/" className="sidebar-Link">
                    <li>
                        Dashboard
                    </li>
                </Link>
                <Link to="/department" className="sidebar-Link">
                    <li>
                        Department
                    </li>
                </Link>
                <Link to="/products" className="sidebar-Link">
                    <li>
                        Products
                    </li>
                </Link>
            </ul>
        </div>
    )
}