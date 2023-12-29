import { useEffect } from "react";
//import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {Routes,Route} from "react-router-dom";
//import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import './App.css';
import LogIn from "./LogIn";
import User from "./User";
import Leaderboard from "./Leaderboard";
import CreateQuestion from "./CreateQuestion";
import Question from "./Question";
import InvalidRoute from "./InvalidRoute";
import LogOut from "./LogOut";

const App = () => {
  //console.log("inside App");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch]);

  //console.log("app props:",props);
  return (
    <div className="App">
      {//props.loading ? null : (
        <Routes>
            <Route exact path="/" element={<LogIn />} />
            <Route exact path="/users/:id" element={<User />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route exact path="/add" element={<CreateQuestion />} />
            <Route exact path="/questions/:qid" element={<Question />} />
            <Route exact path="/logout" element={<LogOut />} />
            <Route path = "/*" element={<InvalidRoute />} />
        </Routes>  
      //)
    }
    </div>
  );
}

//export default connect()(App);
export default App;


