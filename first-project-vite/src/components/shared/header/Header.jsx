import propTypes from "prop-types";
const Header = (props) => {
    // console.log(props);
    return(
        <header className="app-level-header">
            <div className="logo">
            <h1>{props.title}</h1>
            </div>
            <nav>
                <ul>
                    {props.navElements.map(navElement => {
                       return <li key = {navElement}><a href="#">{navElement}</a></li>
                    })}
                </ul>
            </nav>
        </header>
    )
    
}
Header.defaultProps = {
    title:"DefaultTitle",
    navElements:["nav1", "nav2", "nav3"]  
}
Header.propTypes = {
    title: propTypes.string,
    navElements: propTypes.arrayOf(propTypes.string)
}
export default Header;