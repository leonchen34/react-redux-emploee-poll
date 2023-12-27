import { RECEIVE_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case UPDATE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default:
            return state;
    }
}