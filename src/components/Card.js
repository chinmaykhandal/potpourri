import "./Card.css";
import { FiMoreHorizontal } from "react-icons/fi";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
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
            <Stack spacing={1} className="rating">
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
          </div>
          <div className="other-details">
            &nbsp;
            <FiMoreHorizontal size={40} /><br />
            <span class="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
