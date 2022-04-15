import Card from "./Card";
import CardImg from "../images/food potpourri.jpg"
import "./Main.css";
function Main() {
    return (
        <div className="main">
        <p className="welcome-text">
            Check Out what's been cooking
            <br />Top posts on Potpourri ...
        </p>
        <br />
        <a href="#!" className="upload-btn">Upload</a>
        <a href="#!" className="see-more-btn">See More> </a>
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