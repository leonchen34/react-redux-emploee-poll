import { useState } from "react";
import { Link } from "react-router-dom";

const QuestionList = ({newList,doneList,user}) => {
    const [newq,setNewQ] = useState(true);

    function handleSelect(e) {
        e.preventDefault();
        if (e.target.value === "new")
            setNewQ(true);
        else if (e.target.value === "done")
            setNewQ(false);
    }

    const NewqList = ({list}) => {
        return (
            <ul className="question-list">{
                list.map((q) => {
                    const url=`/questions/${q.id}`;
                    const timestamp = new Date(q.timestamp).toLocaleString();
                    return (            
                        <li key={q.id} >
                            <div>
                                <p>{q.author}</p>
                                <p>{timestamp}</p>
                                <div className="link-show">
                                    <Link to={url} state={{user}}>Show</Link>
                                </div>
                            </div>
                        </li>
                    )
                })
            }</ul>
        )
    }

    const DoneList = ({list}) => {
        return (
            <ul className="question-list">{
                list.map((q) => {
                    const url=`/questions/${q.id}`;
                    const timestamp = new Date(q.timestamp).toLocaleString();
                    const done = true;
                    return (            
                        <li key={q.id}>                          
                            <p>{q.author}</p>
                            <p>{timestamp}</p>
                            <div className="link-show">
                                <Link to={url} state={{user,done}}>Show</Link>
                            </div>
                        </li>      
                    )
                })
            }</ul>  
        )           
    }

    return(
        <div className="question-box">
            <h1><select onChange={handleSelect}>
                <option value="new" key="new">New Questions</option>
                <option value="done" key="done">Done</option>
            </select></h1>
            { newq ? <NewqList list={newList} /> : <DoneList list={doneList} /> }
        </div>
    )
}

export default QuestionList;