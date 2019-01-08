import React, { Component } from "react";
import { MenuItem } from "../MenuItem/MenuItem";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorOriginal: true
    };
  }

  componentDidMount() {
    /*
      Se llama cuando se ha incluido el componente en el DOM.
    */
  }

  componentDidUpdate() {
    /*
      Se llama cuando se reciven nuevas props*.
    */
  }

  componentWillUnmount() {
    /*
      Este método se llamará justo antes de que se desmonte el componente.
      Esto pasa cuando el componente que le hacía referencia deja de hacerlo.
    */
  }

  changeColor() {
    this.setState({ colorOriginal: !this.state.colorOriginal });
  }

  render() {
    // Se llama cada vez que hay un cambio en el estado*.

    const backgroundColor = {
      backgroundColor: this.state.colorOriginal ? "red" : "green"
    };

    return (
      <div
        className="c-menu"
        style={backgroundColor}
        onClick={this.changeColor.bind(this)}
      >
        <MenuItem> Home </MenuItem>
        <MenuItem active={true}> Not Home </MenuItem>
        <MenuItem />
      </div>
    );
  }
}

/*
 *       * El "Estado" y las "Props" serán explicadas más adelante.
 */
