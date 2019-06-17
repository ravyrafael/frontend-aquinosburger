import React, { Component } from 'react';
import { connect } from 'react-redux'

// import { Container } from './styles';





class Clientes extends Component {
  
  render() {
    console.log()
    return (
    <div>
    <h1 >Clientes</h1>
    {this.props.clientes.map(cliente => (<h2>{cliente.name} - {cliente.email}</h2>)
    )}
      </div>
      );
  }
}

const mapStateToProps = state => ({clientes : state.clientes})
export default connect(mapStateToProps)(Clientes);
