import logo from '../assets/images/star-wars-logo-2.png';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/people");
    }

    return (
        <div className="home">
            <Navbar navigate={navigate} />
            <div className="home-container">
                <h1 className="home-title">Welcome to the</h1>
                <img className="home-image" src={logo} alt="Star Wars Logo" />
                <h1 className="home-title">APi</h1>
                <button className="home-button" onClick={handleClick}>Begin the journey</button>
            </div>
        </div>
    )
}

export default Home