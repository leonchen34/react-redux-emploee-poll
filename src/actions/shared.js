import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, updateUserAnswers } from "./users";
import { receiveQuestions, updateQuestion } from "./questions";
import { setAuthedUser } from "./authedUser";
//import { showLoading, hideLoading } from "react-redux-loading-bar";
const AUTHED_ID = " ";

export function handleInitialData () {
    //console.log("inside handleInitialData");
    return (dispatch) => {
        //dispatch(showLoading());
        return getInitialData().then(({users,questions}) => {
            console.log("downloaded info:",users);
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));
            //dispatch(hideLoading());
        });
    }
}

export function handleUpdateUserAnswer (uId,qId,answer) {
    //console.log("inside handleUpdateUserAnswer");
    //console.log(`${uId},${qId},${answer}`);
    return (dispatch) => {
        return saveQuestionAnswer(uId,qId,answer).then((resp) => {
            //console.log("resp:",resp);
            const user = resp.user;
            const question = resp.question;
            //console.log("update user:",user);
            //console.log("update question:",question);           
            dispatch(updateUserAnswers(user));
            dispatch(updateQuestion(question));      
        });
    }
}