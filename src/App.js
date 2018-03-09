import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { decrement, increment, redo, undo } from "./ducks/counter";

class App extends Component {
  render() {
    console.log(this.props)
    const { currentValue, decrement, futureValues, increment, previousValues, redo, undo } = this.props;

    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ currentValue }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => increment ( 10 ) }
            >
              +10
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => increment ( 21 ) }
            >
              +21
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => decrement (37) }
            >
              -37
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => decrement (2) }
            >
              -2
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ previousValues.length === 0 }
              onClick={ undo }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ futureValues.length === 0 }
              onClick={ redo }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}
  function mapStateToProps( state ) {
    return state;

}

export default connect( mapStateToProps, { decrement, increment, redo, undo } )( App );
