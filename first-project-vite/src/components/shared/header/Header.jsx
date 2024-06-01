import { Link } from "react-router-dom";

const Header = () => {

    return(
        <header className="app-level-header">
            <div className="logo">
            <h1><Link to={"/"}>STUDENT MANAGER</Link></h1>
            </div>
            <nav>
                <ul>
                 <li><Link to={"/"}>HOME</Link></li>
                 <li><Link to={"/studentList/new"}>NEWSTUDENT</Link></li>
                 <li><Link to={"/studentList"}>STUDENTS</Link></li>
                </ul>
            </nav>
        </header>
    )
    
}
export default Header;