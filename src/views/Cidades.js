import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../stores/ducks/cidades'

class Cidades extends Component {
  componentWillMount() {
    this.props.ListCidades()
  }
  render() {
    const { cidades } = this.props.cidades
    return (
      <div>
        <h1 >Cidades </h1>
        { cidades.map(cidade=>(<div key={cidade.id}>{cidade.nome}</div>))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ cidades: state.cidades })
const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cidades);
