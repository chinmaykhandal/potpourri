import "./Navbar.css";
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
function Navbar() {
    return (
        <Router>
        <div className="navbar container">
        <p className="logo">potpourri</p>
        <div className="nav-links">
            <Link to="/"><a href="#!" className="nav-btn">Home</a></Link>&nbsp;&nbsp;
            <a href="#!" className="nav-btn">Chats</a>&nbsp;&nbsp;
            <Link to="/search"><a href="#!" className="nav-btn">Search</a></Link>&nbsp;&nbsp;
            <a href="#!" className="nav-btn">Profile</a>&nbsp;&nbsp;
            <a href="#!" className="nav-btn">Notifications</a>
        </div>
        <div><Link to="/login"><a href="#!" className="btn">Log In / Sign Up</a></Link></div>
        </div>
        </Router>
    )    
}


export default Navbar;