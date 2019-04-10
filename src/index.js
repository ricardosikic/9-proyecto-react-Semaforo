import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class TrafficLights extends React.Component {
  constructor() {
    super();
    this.state = { color: null };
  }

  render() {
    console.log(this.state);
    const uno = document.getElementById("cuadro1");
    const dos = document.getElementById("cuadro2");
    const tres = document.getElementById("cuadro3");

    if (this.state.color === "rojo") {
      uno.style.background = "red";
      tres.style.background = "none";
    }
    if (this.state.color === "yellow") {
      dos.style.background = this.state.color;
      uno.style.background = "none";
    }
    if (this.state.color === "verde") {
      tres.style.background = "green";
      dos.style.background = "none";
    }

    return (
      <div>
        <div className="contenedor">
          <div
            className="colorRojo"
            id="cuadro1"
            onClick={() => this.setState({ color: "rojo" })}
          />
          <div
            className="colorAmarillo"
            id="cuadro2"
            onClick={() => this.setState({ color: "yellow" })}
          />
          <div
            className="colorVerde"
            id="cuadro3"
            onClick={() => this.setState({ color: "verde" })}
          />
          <div className="fierro" />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TrafficLights />, rootElement);
