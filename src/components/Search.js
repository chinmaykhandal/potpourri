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
      <div className="filters">
        <div className="text">Apply Filters</div>
        <p class="time-filter">
          <label>
            <input type="radio" name="filter" value="*" checked="checked" />{" "}
            30 mins
          </label>
          <label>
            <input type="radio" name="filter" value=".metal" /> 1 hr 
          </label>
          <label>
            <input type="radio" name="filter" value=".transition" /> 2hrs 
          </label>
          <label>
            <input type="radio" name="filter" value=":not(.transition)" /> 2hrs 
          </label>
        </p>
      </div>
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
  );
}

export default Search;
