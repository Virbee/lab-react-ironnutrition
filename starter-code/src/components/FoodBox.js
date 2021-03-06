import React from "react";

function FoodBox(props) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>{props.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={props.quantity} />
            </div>
            <div className="control" id={props.numero}>
              <button
                className="button is-info"
                onClick={event => {
                  props.addQuantity(event.target.parentElement.id);
                }}
              >
                +
              </button>
              <button
                className="button is-info"
                onClick={event => {
                  props.removeQuantity(event.target.parentElement.id);
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
