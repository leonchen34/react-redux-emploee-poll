import {useState,useEffect} from "react";
import {useLocation,Navigate} from "react-router-dom";
//import {connect} from "react-redux";
import {useSelector} from "react-redux";
import Nav from "./Nav";
import { findAvatar } from "../utils/helper";

const Leaderboard = () => {
    const users = useSelector(state => state.users);
    const location = useLocation();
    const user = location.state ? location.state.user : null;
    const[userStat,setUserStat] = useState([]);
    //const invalid = (Object.keys(users).length === 0 || !user) ? true : false;
    const invalid = (user) ? false : true;  
    //let navigate = useNavigate();
        
    useEffect(() => {
        if (invalid) 
            return ;
        let list = [];
        Object.values(users).forEach((value) => {
            let id = value.id;
            let answerCount = Object.keys(value.answers).length;
            let createCount = value.questions.length;
            let name = value.name;
            let obj = {id, name, answerCount, createCount}
            list.push(obj);
        })
        list.sort((a,b) => (b.answerCount+b.createCount) - (a.answerCount + a.createCount));
        //console.log(list);
        setUserStat(list);
      }, [users,invalid]);
    
    //console.log(userStat);
    //console.log(user);
    return (
        <div>
        { invalid ? <Navigate to="/" replace state={{ path: location.pathname}} /> : 
            (<div>
            <Nav user={user} />
            <table className="userStat">
                <thead><tr>
                    <th>Users</th>
                    <th>Answered</th>
                    <th>Created</th>
                </tr></thead>
                <tbody>
                {                            
                    userStat.map((e) => {
                        return (
                            <tr key={e.name}>
                                <td>
                                    <table><thead><tr>
                                    <th><img alt={`${e.id} avatar`} src={findAvatar(e.id)} width="50px" height="50px" /></th>
                                    <th><p>{e.name}</p><p>{e.id}</p></th>
                                    </tr></thead></table>
                                </td>
                                <td>{e.answerCount}</td>
                                <td>{e.createCount}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>)}
        </div>
    )
}
/*
const mapStateToProps = ({users}) => {
    return {
        users,
    };
}
  
export default connect(mapStateToProps)(Leaderboard);
*/
export default Leaderboard;