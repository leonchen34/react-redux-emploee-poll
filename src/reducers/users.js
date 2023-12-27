import { RECEIVE_USERS,UPDATE_USER_QUESTIONS,UPDATE_USER_ANSWERS } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            //console.log({...action.users});
            return {
                ...state,
                ...action.users,
            };
        case UPDATE_USER_QUESTIONS:
            //console.log("action qid:",action.qId);
            return {
                ...state,
                [action.user.id]: {
                    ...action.user,
                    questions: action.user.questions.concat([action.qId]),
                }
            }
            case UPDATE_USER_ANSWERS:
                //console.log("action qid:",action.qId);
                return {
                    ...state,
                    [action.user.id]: {
                        ...action.user,
                        answers: action.user.answers,
                    }
                }
        default:
            return state;
    }
}