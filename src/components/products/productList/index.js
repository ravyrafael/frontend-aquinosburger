import React, { Component } from 'react';
import './productList.css';
import ProductItem from '../productItem';

class ProductList extends Component {
    render() {
        return (
            <>
                <div className="product-list">
                    <ProductItem />
                </div>
            </>
        );
    }
}
export default ProductList;