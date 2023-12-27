import { saveQuestion } from "../utils/api";
import { updateUserQuestions} from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
};

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function updateQuestion(question) {
    return {
        type: UPDATE_QUESTION,
        question,
    }
}

export function handleAddQuestion (question,user) {
    return (dispatch) => {
        saveQuestion(question).then((res) => {
            dispatch(addQuestion(res));
            dispatch(updateUserQuestions(user,res.id));
        })
    }
}