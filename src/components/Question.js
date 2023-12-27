import {useState} from "react";
import {connect} from "react-redux";
import {useLocation,useParams} from "react-router-dom";
import Nav from "./Nav";
import {handleUpdateUserAnswer} from "../actions/shared";
import InvalidRoute from "./InvalidRoute";
import { findAvatar } from "../utils/helper";
import selected from "../avatars/selected-5-48.png";

const Question = ({dispatch,users,questions}) => {
    const [selectedOne,setSelectedOne] = useState(false);
    const [selectedTwo,setSelectedTwo] = useState(false);
    const location = useLocation();
    let param = useParams();
    //console.log("params:",param);
    const {qid} = param;
    const question = questions[qid];
    let valid = true;
    
    //const {user,done} = location.state;
    const user = location.state ? location.state.user : null;
    const done = location.state ? location.state.done : null;
    if (!question || user === null)
        valid = false;

    let first = true;
    if (valid && question)
        first = question.optionOne.votes.includes(user.id) ? true : false;
    const numPeople = Object.keys(users).length;
    const answered = done ? true : false;
    //console.log("answered:",answered);

    function handleClick(e,uid,qid,answer) {
        e.preventDefault();
        console.log(`uid:${uid},qid:${qid},answer:${answer}`);
        dispatch(handleUpdateUserAnswer(uid,qid,answer));
        if (answer === "optionOne")
            setSelectedOne(true);
        else
            setSelectedTwo(true);
    }

    return (
        <div> 
            {valid ? (<div>
            <Nav user={user}/>
            <h3>Poll by {question.author}</h3>
            <img src={findAvatar(question.author)} alt={`Avatar of ${question.author}`} className="avatar"/>
            {!answered ? 
            (<div>
                <h3>Would You Rather</h3>
                <ul className="option-list">
                    <li key="option1"><h3>Option1</h3><p>{question.optionOne.text}</p> 
                        <button onClick={(e) => handleClick(e,user.id,question.id,"optionOne")} disabled={selectedOne || selectedTwo}>Click</button>
                        {selectedOne ?  <img alt="selected" src={selected} /> : " "}
                    </li>
                    <li key="option2"><h3>Option2</h3><p>{question.optionTwo.text}</p> 
                        <button onClick={(e) =>handleClick(e,user.id,question.id,"optionTwo")} disabled={selectedOne || selectedTwo}>Click</button>
                        {selectedTwo ?  <img alt="selected" src={selected} /> : " "}
                    </li>
                </ul>
            </div>) : 
            (<ul className="option-list">               
                <li key="option1">
                    <h3>Option1</h3>
                    <p>{question.optionOne.text}</p> 
                    <p>People Voted: {question.optionOne.votes.length}</p>
                    <p>Percentage Voted: {(question.optionOne.votes.length/numPeople)*100}%</p>
                    {first ?  <img alt="selected" src={selected} /> : " "}
                </li>
                <li key="option2">
                    <h3>Option2</h3>
                    <p>{question.optionTwo.text}</p> 
                    <p>People Voted: {question.optionTwo.votes.length}</p>
                    <p>Percentage Voted: {(question.optionTwo.votes.length/numPeople)*100}%</p>
                    {!first ? <img alt="selected" src={selected} /> : " "}
                </li>               
            </ul>) 
        }
        </div>) : <InvalidRoute /> }
        </div>

    )
}

const mapStateToProps = ({dispatch,users,questions}) => {
    return {
        dispatch,
        users,
        questions,
    };
}
  
export default connect(mapStateToProps)(Question);