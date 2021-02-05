// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

   

    coords = (event) => {
        const x = event.clientX
        const y = event.clientY
        return this.props.onReceiveCoordinates([x, y])
    }

    render() {
        return <button onClick={(event) => this.coords(event)}></button>
    }
}