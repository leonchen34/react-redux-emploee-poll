import { Link } from "react-router-dom";

const QuestionList = ({newList,doneList,user}) => {
    //console.log("newList:",newList);
    //console.log("doneList:",doneList);
    //console.log("user:",user);
    return(
        <div className="question-box">
        <h3>New Questions</h3>
        <ul className="question-list">
            {
                newList.map((q) => {
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
                }) }
        </ul>        
        <h3>Done</h3>
        <ul className="question-list">{
                doneList.map((q) => {
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
    </div>)
}

export default QuestionList;