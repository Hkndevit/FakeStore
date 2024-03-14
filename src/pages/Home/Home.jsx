import "./Home.css"
import { Link, NavLink } from "react-router-dom";

const Home = () => {
    return (  
        <section className="Home-Seite">
        <h1>Home Seite</h1> 
        <NavLink className="button" to="/Products" >Zum Shop</NavLink>
        </section>


        
    );
};

export default Home;