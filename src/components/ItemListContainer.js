import React, { Component } from 'react';

class ItemListContainer extends Component {

    render() {
        const greeting = 'Te damos la bienvenida';
        return (
          <div>
            <Greeting greeting={greeting} />
          </div>
        );
      }
    }

    const Greeting = props => <h1>{props.greeting}</h1>;

export  default ItemListContainer  