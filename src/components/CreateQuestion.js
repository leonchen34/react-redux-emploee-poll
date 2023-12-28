//import {useEffect} from "react";
import serializeForm from "form-serialize";
import {useLocation,useNavigate,Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {handleAddQuestion} from "../actions/questions";

import Nav from "./Nav";

const CreateQuestion = ({dispatch}) => {
    const location = useLocation();
    const user = location.state ? location.state.user : null;
    const invalid = (!user) ? true : false;
    let navigate = useNavigate();
        
    const handleSubmit = (e) => {
        e.preventDefault();    
        const values = serializeForm(e.target,{ hash: true}); 
        const option1 = values.option1;
        const option2 = values.option2;
        if (option1 && option2) {
            console.log(`option1:${option1},option2:${option2}`);
            let question = {
                author: user.id,
                optionOneText: option1,
                optionTwoText: option2,
            }
            dispatch(handleAddQuestion(question,user));
            //const inputOption1 = document.getElementById("option1");
            //inputOption1.value="";
            navigate(`/users/${user.id}`);
        };
    }

    return (
        <div> {invalid ? <Navigate to="/" replace state={{ path: location.pathname}} /> : (<div>
            <Nav user={user} />
            <h2>Would You Rather</h2>
            <h3>create your own poll</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>First Option</h3>
                <input type="text" id="option1" name="option1" placeholder="Option One" />
                <h3>Second Option</h3>
                <input type="text" id="option2" name="option2" placeholder="Option Two" />
                <br /> <br />
                <button>Submit</button>
            </form> 
            </div>)}         
        </div>
    )
}

export default connect()(CreateQuestion);