import React, { Component } from 'react';
// import { Container } from './styles';
import ProductList from '../../components/products/productList'
import FloatButtonContainer from '../../components/shared/floatButtonContainer'
import { FaPlus } from 'react-icons/fa'
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <ProductList />
        <FloatButtonContainer size="md" buttons={[{ icon: FaPlus, color: 'red' },{ icon: FaPlus, color: 'blue' }]} />
      </>
    );
  }
}
