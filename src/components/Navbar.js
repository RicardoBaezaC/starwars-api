import logo from "../assets/images/star-wars-logo-2.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return(
        <nav className="navbar">
            <div className="logo" onClick={handleClick}>
                <img src={logo} />
            </div>
        </nav>
    )
}

export default Navbar