import { Link } from "react-router-dom";

const Navbar = () => {
   
    return (
        <header>
            <div className = "container">
                <Link to = '/'>
                    <h1>GymTime</h1>
                </Link>
                <nav>
                   <div className = "">
                        <Link to = '/login'>
                            Log in
                        </Link>
                        <Link to = '/signup'>
                            Sign Up
                        </Link>
                    </div> 
                </nav>
            </div>
        </header>
    )
}

export default Navbar;