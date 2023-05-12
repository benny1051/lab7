import React from "react";
import star from "../images/star.png";
const Movie = (props) => {
  {
    for (let index = 0; index < props.item.rating; index++) {
      <img className="img-responsive" src={star} />;
    }
  }

  if (props.item.rating == 1) {
    return (
      <li className="list-group-item">
        {props.item.title}

        <button
          className="btn btn-sm btn-danger float-end"
          onClick={() => {
            props.deleteItem(props.item.id);
          }}
        >
          X
        </button>

        {<img className="img-responsive" src={star} />}
      </li>
    );
  } else if (props.item.rating == 2) {
    return (
      <li className="list-group-item">
        {props.item.title}

        <button
          className="btn btn-sm btn-danger float-end"
          onClick={() => {
            props.deleteItem(props.item.id);
          }}
        >
          X
        </button>

        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
      </li>
    );
  } else if (props.item.rating == 3) {
    return (
      <li className="list-group-item">
        {props.item.title}

        <button
          className="btn btn-sm btn-danger float-end"
          onClick={() => {
            props.deleteItem(props.item.id);
          }}
        >
          X
        </button>

        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
      </li>
    );
  } else if (props.item.rating == 4) {
    return (
      <li className="list-group-item">
        {props.item.title}

        <button
          className="btn btn-sm btn-danger float-end"
          onClick={() => {
            props.deleteItem(props.item.id);
          }}
        >
          X
        </button>

        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
      </li>
    );
  } else if (props.item.rating == 5) {
    return (
      <li className="list-group-item">
        {props.item.title}

        <button
          className="btn btn-sm btn-danger float-end"
          onClick={() => {
            props.deleteItem(props.item.id);
          }}
        >
          X
        </button>

        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
        {<img className="img-responsive" src={star} />}
      </li>
    );
  }
};

export default Movie;
