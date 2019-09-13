import React, { Component } from 'react';
import { FaHamburger } from 'react-icons/fa'
import './productItem.css';
import Cebola from '../../../images/cebola-16.png';
import Queijo from '../../../images/queijo-32.png';

class ProductItem extends Component {
    render() {
        return (
            <>
                <div className="product-item" style={{ "backgroundImage": 'url("https://source.unsplash.com/300x225/?wave)"' }} >
                    {/* <img className="product-image" src="https://source.unsplash.com/300x225/?wave" alt="wave" /> */}
                    <div className="product-title">
                        <h2>
                            <small>R$22,00</small>
                            <FaHamburger /> Hamburger
                        </h2>
                        <div className="product-variants">
                            <img src={Cebola} alt="" />
                            <img src={Queijo} alt="" />
                            <img src={Cebola} alt="" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ProductItem;