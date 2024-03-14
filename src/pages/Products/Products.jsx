import "./Products.css"
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [Products, SetProducts] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => SetProducts(data))
        // .catch((err) => console.err("Fehler beim laden...", err));
    }, []);



return (
    <> 
       <div className="Produkt-Liste">
        <h1>Produkt Liste</h1> 
        <NavLink className="button" to="/">Zurück</NavLink>
        </div>

        <section className="Products-list">
            {Products ? (Products.map((item, index) => (
            <div key={index}> 
                <img src={item.image}  />
                <p className="title-list">{item.title}</p>
                <Link className="button" to={`/ProductPage/${item.id}`}>Show More</Link>
                
            </div>)) 
            
            ) : (
            <p>Seite Lädt...</p>
            )}
        </section>
        </>
        );
};

export default Products;