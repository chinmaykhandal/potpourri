import Card from "./Card";
import "./Search.css";
import CardImg from "../images/food potpourri.jpg"
function Search() {
  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          className="search"
          placeholder="Search by recipe name, ingredient or country"
        />
      </div>
    <div className="row">
      <div className="filter-box column column1">
        
      </div>
      <div className="cards column column2">
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
      
    </div>
  );
}

export default Search;
