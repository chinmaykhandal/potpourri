import Card from "./Card";
import CardImg from "../images/food potpourri.jpg";
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';

import "./Main.css";
function Main() {
    return (
        <div className="main">
        <p className="welcome-text">
            Check Out what's been cooking
            <br />Top posts on Potpourri ...
        </p>
        <br />
        <Link to="/upload"><a href="#!" className="upload-btn">Upload</a></Link>
        <Link to="/search"><a href="#!" className="see-more-btn">See More => </a></Link>
        <br /> <br />
        <div className="cards">
        <Card 
            img={CardImg}
            title="Recipe Name"
            description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
        />
                <Card 
            img={CardImg}
            title="Recipe Name"
            description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
        />
        
                <Card 
            img={CardImg}
            title="Recipe Name"
            description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
        />
        </div>
        </div>

    )    
}


export default Main;