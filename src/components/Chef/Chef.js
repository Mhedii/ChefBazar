import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Cook from "../Cook/Cook";
import Details from "../Details/Details";
import './Chef.css';


const Chef = () => {
    const [chefs, setChefs] = useState([]);
    const [cart, setCart] = useState([]);
    const [cook, setCook] = useState([]);

    useEffect(() => {
        fetch('./chefs.JSON')
            .then(res => res.json())
            .then(data => setChefs(data))

    }, [])

    const handleHire = (chefdetail) => {
        const newCart = [...cart, chefdetail];
        setCart(newCart);
        const newCook = [...cook, chefdetail];
        setCook(newCook);
    }
    return (
        <div className="chef-container">
            <div className="name-container">
                {
                    chefs.map(chef => <Details
                        key={chef.key}
                        chefdetail={chef}
                        handleHire={handleHire}
                    >
                    </Details>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <Cook cook={cook}></Cook>
            </div>
        </div>

    );
};

export default Chef;