import React, { Component } from 'react';
import ItemDetail from './ItemDetail';

class ItemDetailContainer extends Component {

    render() {
        
        return (
          <ItemDetail />
        );
      }
    }

    const Greeting = props => <h1>{props.greeting}</h1>;

export  default ItemDetailContainer