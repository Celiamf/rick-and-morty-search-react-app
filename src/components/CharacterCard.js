import { Link } from "react-router-dom";
import "../stylesheets/_CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/char/${props.id}`}>
        <li className="card">
          <img src={props.img} alt={props.name} className="card__img" />
          <main className="card__info">
            <h3>{props.name}</h3>
            <p>{props.species}</p>
          </main>
        </li>
      </Link>
    </>
  );
};

export default CharacterCard;