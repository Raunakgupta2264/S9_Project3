import { Link } from "react-router-dom";
import "../components/style.css";

function About() {
    return (
        <>
            <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <br />
                <h1>This is About page</h1>
            </div>
        </>
    );
}

export default About;
