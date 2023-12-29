import {useState} from "react";
//import serializeForm from "form-serialize";
//import {connect} from "react-redux";
import {useSelector,useDispatch} from "react-redux";
import {useLocation,useNavigate,Navigate} from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const LogIn = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [error,setError] = useState(false);
    const [userError,setUserError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [logUser,setLogUser] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState(null);

    let navigate = useNavigate();
    const location = useLocation();
    const urlPath = location.state ? location.state.path : null;
    //console.log(urlPath);

    const handleSubmit = (e) => {
        e.preventDefault();    
        //const values = serializeForm(e.target,{ hash: true}); 
        //const user = values.user;
        //const password = values.password;
        if (logUser || password) {
            //console.log(`user:${user},passwd:${password}`);
            const userObj = users[logUser];
            if (userObj) {
                if (password === userObj.password) {
                    //console.log("found user:",user);
                    dispatch(setAuthedUser(userObj.id));
                    if (urlPath) {
                        setUser(userObj);
                    } else
                        navigate(`/users/${userObj.id}`);
                } else {
                    setUserError(false);
                    setError(false);
                    setPasswordError(true);
                };
            } else {
                setError(false);
                setPasswordError(false);
                setUserError(true);
            }
        } else {
            setUserError(false);
            setPasswordError(false);
            setError(true);
        }
        //const inputUser = document.getElementById("user");
        //inputUser.value="";
    };

    const handleUser = (e) => {
        e.preventDefault();
        setLogUser(e.target.value);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return ( 
    <div>{ user ? 
        <Navigate to={urlPath} replace state={{user}}/> : 
        <div>
            <h2>Log In</h2>
            {error &&
                <h3 data-testid="error-header">Please fill in both user name and password.</h3>
            }           
            {userError &&
                <h3 data-testid="error-user-header">Error: user not found.</h3>
            }
            {passwordError &&
                <h3 data-testid="error-password-header">Error: invalid password.</h3>
            }
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <h3>User:</h3>
                    <select
                        data-testid="user"
                        name="user"
                        value={logUser}
                        onChange={handleUser}
                    >
                        <option value="" key="empty"></option>
                        {
                            Object.keys(users).map((id) =>
                                (<option value={id} key={id} >{id}</option>)
                            )
                        }
                    </select>
                </div>
                <div>
                    <h3>Password:</h3>
                    <input
                        data-testid="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <h3><button>Submit</button></h3>             
            </form>
        </div>
    }</div>)
}
/*
const mapStateToProps = ({dispatch,users}) => ({
  dispatch,
  users,
  });

export default connect(mapStateToProps)(LogIn);
*/
export default LogIn;