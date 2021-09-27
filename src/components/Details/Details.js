
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Details.css';
const Details = (props) => {
    console.log(props.chefdetail)
    const Chefdetail = props.chefdetail || [];
    const { img, name, age, cost, star, starCount } = Chefdetail;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="details">

            <img className="pic" src={img} alt="" />
            <h4>Name:{name}</h4>
            <h4>Age:{age}</h4>
            <h4>Hiring Cost:{cost}</h4>
            <h4>Rating:{star}</h4>
            <h4>Rating Given:{starCount}</h4>
            <button
                onClick={() => props.handleHire(props.chefdetail)}
                className="hire">{element} Hire</button>
        </div>
    );
};

export default Details;