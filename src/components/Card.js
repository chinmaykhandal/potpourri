import "./Card.css";
import { FiMoreHorizontal } from "react-icons/fi";
function Card(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.img} className="card__image" alt="FoogImg" />
      </div>
      <div>
        <div className="card__content">
          <div className="ingredients">
            <h1 className="card__recipe">Recipe Name</h1>
            <div className="card__tags">
              <p className="card__tag">Potato</p>
              <p className="card__tag">Honey</p>
              <p className="card__tag">Seseme Seeds</p>
              <p className="card__tag">Cabbage</p>
              <p className="card__tag">Tomato</p>
            </div>
          </div>
          <div className="other-details">&nbsp;<FiMoreHorizontal size={40}/></div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
