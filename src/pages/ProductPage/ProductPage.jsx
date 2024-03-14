import "./ProductPage.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ProductPage = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((fetchData) => setData(fetchData))
    .catch((err) => console.error("Fehler auf der deteilseite", err));
}, [])



    const { id } = useParams();
    console.log(id);


    useEffect(() => {
        const find = data.find((item) => Number(item.id) === Number(id));
        setFilterData(find);
    }, [data]);

    console.log(filterData);



    return (
        <> 
        <div className="Produkt-Seite">
        <h1>Produkt Seite</h1> 
        <NavLink className="button" to="/Products">Zurück</NavLink>
        </div>
   
    
        <section>
        {filterData ? (
        <div className="page" >
            <h1 className="title">{filterData.title}</h1>
            <img src={filterData.image} alt="" />
            <p className="description">{filterData.description}</p>
            <h3 className="price">{filterData.price} €</h3>
        </div>
        
        ) : (
            <p>Seite Lädt...</p>
        )}
        </section>
        </>
    );
};

export default ProductPage
