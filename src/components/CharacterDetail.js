import { Link } from "react-router-dom";
import DeadOrAliveIcon from "./DeadOrAliveIcon";
import "../stylesheets/_CharacterDetail.scss";

const CharacterDetail = (props) => {
  if (props.char === undefined) {
    return (
      <>
        <Link
          to="/"
          className="detailLink"
          aria-label="Go back to the list"
          title="Go back to the list"
        >
          &lt; Back to the list
        </Link>
        <article className="detail">
          <p>No character was found. Sorry!</p>
        </article>
      </>
    );
  } else
    return (
      <>
        <Link to="/" className="detailLink">
          &lt; Back to the list
        </Link>
        <article className="detail">
          <img
            src={props.char.img}
            alt={props.char.name}
            className="detail__img"
          />
          <div className="detail__info">
            <h3 className="detail__info__name">{props.char.name}</h3>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Status: </span>{" "}
              {props.char.status} {DeadOrAliveIcon(props)}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Species: </span>{" "}
              {props.char.species}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Origin: </span>{" "}
              {props.char.origin}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">No. of pisodes: </span>{" "}
              {props.char.episodes}
            </p>
          </div>
        </article>
      </>
    );
};

export default CharacterDetail;
