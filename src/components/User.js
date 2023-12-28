import {useState, useEffect} from "react";
import {connect} from "react-redux";
import { useParams} from "react-router-dom";
import Nav from "./Nav";
import QuestionList from "./QuestionList";
//import InvalidRoute from "./InvalidRoute";
import LogIn from "./LogIn";

const User = ({users,questions,authedUser}) => {
    const [newList,setNewList] = useState([]);
    const [doneList,setDoneList] = useState([]);
    
    let param = useParams();
    const {id} = param;
    //console.log("user id:",id);
    const valid = (authedUser === id) ? true : false;
    const user = users[id];

    useEffect(() => {
        if (user) {
            const ans = Object.keys(user.answers);
            //console.log("ans:",ans);
            let newq = [];
            let done = [];
            //Object.entries(questions).forEach(([key,q]) => {
            Object.entries(questions).map(([key,q]) => //{
                (ans.length > 0 && ans.includes(key)) ?
                    done = done.concat([q]) :
                    newq = newq.concat([q])
            )
            newq.sort((a,b) => b.timestamp - a.timestamp);
            done.sort((a,b) => b.timestamp - a.timestamp);
            setNewList(newq);
            setDoneList(done);
        }
    },[valid,user,questions]);

    return (
        <div>
            {valid ? 
                (<div>
                    <Nav user={user}/>
                    <QuestionList newList={newList} doneList={doneList} user={user} /> 
                </div>) :
                <LogIn /> 
            }
        </div>
    )
};
const mapStateToProps = ({users, questions, authedUser}) => ({
    users,
    questions,
    authedUser,
});
export default connect(mapStateToProps)(User);