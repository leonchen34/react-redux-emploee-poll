import { Link } from "react-router-dom";
import { findAvatar } from "../utils/helper";

const Nav = ({user}) => {
    const homeUrl=`/users/${user.id}`;
    return (
        <nav className="nav">
            <ul>
                <li key="pre">
                    <pre>   </pre>
                </li>
                <li key="home">
                    <Link to={homeUrl}><u>Home</u></Link>
                </li>
                <li key="leaderboard">
                    <Link to="/leaderboard" state={{user}}><u>Leaderboard</u></Link>
                </li>
                <li key="create">
                    <Link to="/add" state={{user}}><u>New</u></Link>
                </li>
                <li key="space">
                    <pre>                                                       </pre>
                </li>
                <li key={`${user.id} avatar`}>
                    <img src={findAvatar(user.id)} alt={`Avatar of ${user.id}`} className="avatar"/>
                    {user.id}
                </li>
                <li key="logout">
                    <Link to="/logout"><u>logout</u></Link>
                </li>           
            </ul>
            <hr />
        </nav>
    )
}

export default Nav;